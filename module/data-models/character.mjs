const fields = foundry.data.fields;

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new fields.SchemaField({
        secretIdentity: new fields.StringField({
          required: true,
          nullable: false,
          initial: ""
        })
      }),

      physical: new fields.SchemaField({
        gender: new fields.StringField({
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
        height: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          min: 0
        }),
        weight: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          min: 0
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
        })
      }),

      characteristics: new fields.SchemaField({
        strength: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),
        endurance: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),
        agility: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),
        intelligence: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
        }),
        charisma: new fields.NumberField({
          required: true,
          nullable: false,
          initial: 0,
          integer: true,
          min: 0
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
        })
      })
    };
  }
}
