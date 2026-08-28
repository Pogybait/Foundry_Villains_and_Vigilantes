import { CharacterData } from "./module/data-models/character.mjs";

/**
 * Villains & Vigilantes Foundry VTT System
 * System ID: villains-and-vigilantes
 */

Hooks.once("init", () => {
  console.log("Villains and Vigilantes | Initializing system");

  CONFIG.Actor.dataModels.character = CharacterData;
});
