import { writable } from "svelte/store";
import { getAllDirectories } from "./utils";

export const selectedPathStore = writable<number[]>([]);

export const directoryStore = writable<DirectoryData[]>(getAllDirectories());
