import { CharacterData } from "./module/data-models/character.mjs";
import { CharacterSheet } from "./module/sheets/character-sheet.mjs";

/**
 * Villains & Vigilantes Foundry VTT System
 * System ID: villains-and-vigilantes
 */

Hooks.once("init", () => {
  console.log("Villains and Vigilantes | Initializing system");

  CONFIG.Actor.dataModels.character = CharacterData;

  DocumentSheetConfig.registerSheet(
    foundry.documents.Actor,
    game.system.id,
    CharacterSheet,
    {
      types: ["character"],
      makeDefault: true,
      label: "Villains and Vigilantes Character Sheet"
    }
  );
});
