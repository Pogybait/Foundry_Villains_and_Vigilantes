const fields = foundry.data.fields;

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new fields.SchemaField({
        value: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        }),

        side: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        })
      }),

      physical: new fields.SchemaField({
        sex: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        }),

        age: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),

        weight: new fields.SchemaField({
          base: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            min: 0
          }),

          current: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            min: 0
          })
        })
      }),

      progression: new fields.SchemaField({
        level: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 1,
          integer: true,
          min: 1
        }),

        experience: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),

        training: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        })
      }),

      characteristics: new fields.SchemaField({
        strength: new fields.SchemaField({
          base: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            integer: true,
            min: 0
          })
        }),

        endurance: new fields.SchemaField({
          base: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            integer: true,
            min: 0
          })
        }),

        agility: new fields.SchemaField({
          base: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            integer: true,
            min: 0
          })
        }),

        intelligence: new fields.SchemaField({
          base: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            integer: true,
            min: 0
          })
        }),

        charisma: new fields.SchemaField({
          base: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            integer: true,
            min: 0
          })
        })
      }),

      resources: new fields.SchemaField({
        hitPoints: new fields.SchemaField({
          value: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            min: 0
          }),

          max: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            min: 0
          })
        }),

        power: new fields.SchemaField({
          value: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            min: 0
          }),

          max: new fields.NumberField({
            required: true,
            nullable: false,
            initial: 0,
            min: 0
          })
        }),

        inventingPoints: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),

        cash: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          min: 0
        })
      }),

      movement: new fields.SchemaField({
        additional: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        })
      }),

      biography: new fields.SchemaField({
        originAndBackground: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        }),

        otherInformation: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        })
      }),

      status: new fields.SchemaField({
        legalStatus: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        }),

        securityClearance: new fields.NumberField({
          required: false,
          nullable: true,
          initial: null,
          integer: true,
          min: 1,
          max: 20
        })
      })
    };
  }
}
