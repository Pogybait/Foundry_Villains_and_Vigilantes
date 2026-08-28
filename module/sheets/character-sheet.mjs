const { ActorSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class CharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {

  static DEFAULT_OPTIONS = {
    tag: "form",
    classes: [
      "villains-and-vigilantes",
      "character-sheet"
    ],
    position: {
      width: 1000,
      height: 920
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    }
  };

  static PARTS = {
    form: {
      template: "systems/villains-and-vigilantes/templates/actor/character-sheet.hbs"
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    context.actor = this.actor;
    context.system = this.actor.system;

    return context;
  }
}
