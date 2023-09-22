import { writable } from 'svelte/store';

export const filter = writable<string>("All")
export const searchAuthor = writable<string>("")