'use server';
/**
 * @fileOverview Provides personalized menu suggestions based on event type,
 * dietary preferences, and number of guests. It uses AI to reason
 * about optimal food choices for catering events.
 *
 * - personalizeMenuSuggestions - A function that provides personalized menu suggestions.
 * - PersonalizedMenuSuggestionsInput - The input type for the personalizeMenuSuggestions function.
 * - PersonalizedMenuSuggestionsOutput - The return type for the personalizedMenuSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedMenuSuggestionsInputSchema = z.object({
  eventType: z
    .string()
    .describe(
      'The type of event (e.g., "Wedding", "Corporate Lunch", "Birthday Party", "Casual Gathering").'
    ),
  dietaryPreferences: z
    .array(z.string())
    .describe(
      'A list of dietary preferences or restrictions (e.g., "Vegetarian", "Vegan", "Gluten-Free", "Nut Allergy", "Halal", "Kosher"). If none, provide an empty array.'
    )
    .default([]),
  numberOfGuests: z
    .number()
    .describe('The estimated number of guests for the event.')
    .min(1),
  cuisinePreference:
    z.string().optional().describe('Optional: A preferred cuisine type (e.g., "Italian", "Mexican", "Asian Fusion", "Mediterranean").'),
});
export type PersonalizedMenuSuggestionsInput = z.infer<
  typeof PersonalizedMenuSuggestionsInputSchema
>;

const PersonalizedMenuSuggestionsOutputSchema = z.object({
  menu: z
    .array(
      z.object({
        course: z
          .string()
          .describe(
            'The course of the meal (e.g., Appetizer, Main Course, Dessert, Beverage).'
          ),
        dishName:
          z.string().describe('The name of the suggested dish.'),
        description:
          z.string().describe('A brief description of the dish.'),
        dietaryNotes: z
          .array(z.string())
          .describe(
            'Any relevant dietary notes for the dish (e.g., "Vegetarian", "Gluten-Free").'
          )
          .optional(),
      })
    )
    .describe('A list of suggested menu items.'),
  reasoning: z
    .string()
    .describe(
      'A detailed explanation of why these menu items were chosen, considering event type and dietary preferences. Include how these choices are optimal for the guest count.'
    ),
});
export type PersonalizedMenuSuggestionsOutput = z.infer<
  typeof PersonalizedMenuSuggestionsOutputSchema
>;

export async function personalizeMenuSuggestions(
  input: PersonalizedMenuSuggestionsInput
): Promise<PersonalizedMenuSuggestionsOutput> {
  return personalizedMenuSuggestionsFlow(input);
}

const personalizedMenuSuggestionsPrompt = ai.definePrompt({
  name: 'personalizedMenuSuggestionsPrompt',
  input: {schema: PersonalizedMenuSuggestionsInputSchema},
  output: {schema: PersonalizedMenuSuggestionsOutputSchema},
  prompt: `You are an expert catering chef and menu planner. Your task is to suggest a personalized menu for an event based on the provided details.
Consider the event type, dietary preferences, number of guests, and any cuisine preferences to craft an optimal menu.
Ensure the menu is diverse, appealing, and suitable for the given constraints.
For each dish, provide its course, name, a brief description, and any relevant dietary notes.
After the menu, provide a detailed reasoning explaining your choices and how they are optimal for the client's needs.

Event Details:
- Event Type: {{{eventType}}}
- Dietary Preferences: {{#if dietaryPreferences}}{{#each dietaryPreferences}}- {{{this}}}{{/each}}{{else}}None{{/if}}
- Number of Guests: {{{numberOfGuests}}}
{{#if cuisinePreference}}
- Cuisine Preference: {{{cuisinePreference}}}
{{/if}}

Provide the output in JSON format, strictly following the specified schema.`,
});

const personalizedMenuSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedMenuSuggestionsFlow',
    inputSchema: PersonalizedMenuSuggestionsInputSchema,
    outputSchema: PersonalizedMenuSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await personalizedMenuSuggestionsPrompt(input);
    return output!;
  }
);
