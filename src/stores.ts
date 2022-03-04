import { writable } from "svelte/store";
import type { GameMode } from "./enums";
import { createDefaultSettings, createNumberStates } from "./utils";

export const mode = writable<GameMode>();

export const numberStates = writable(createNumberStates());

export const settings = writable(createDefaultSettings());
