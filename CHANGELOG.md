# Villains and Vigilantes Foundry VTT System
## Development Change Log

This document records validated development milestones, major architectural
decisions, known limitations, and deferred functionality for the Villains and
Vigilantes Foundry VTT system.

System ID: `villains-and-vigilantes`

Target Platform: Foundry Virtual Tabletop V14


# 0.0.1 - Crawl Baseline

## Milestone: Installable Foundry System

Status: VALIDATED

### Implemented

- Created Foundry VTT system package.
- Established permanent system ID:
  `villains-and-vigilantes`
- Created V14-compatible `system.json`.
- Registered the V&V Character Actor type.
- Registered a custom V14 Actor sheet using `ActorSheetV2`.
- Established the initial Character TypeDataModel.
- Created a dedicated development world:
  `V&V System Test`
- Development world operates without modules.

### Validation

- Foundry V14 recognizes the system.
- System can be selected when creating a world.
- Development world launches successfully.
- Character Actors can be created.
- Custom V&V Actor sheet opens without errors.


# 0.0.1 - Character Data Model Baseline

## Milestone: V&V Character Record Data Structure

Status: VALIDATED

### Implemented

Persistent Actor data currently supports:

#### Identity
- Identity
- Side

#### Physical
- Sex
- Age
- Base Weight
- Current Weight

#### Progression
- Level
- Experience
- Training

#### Characteristics
- Strength
- Endurance
- Agility
- Intelligence
- Charisma

Characteristics currently preserve their base values independently from
future effective/modified values.

#### Combat Resources
- Hit Points - Current
- Hit Points - Maximum
- Power - Current
- Power - Maximum

#### Other Resources
- Inventing Points
- Cash

#### Movement
- Additional Movement information

#### Biography
- Origin and Background
- Other Information

#### Status
- Legal Status
- Security Clearance

### Architectural Decisions

- Base Characteristics will not be overwritten by Power, equipment, or
  temporary modifiers.
- Effective Characteristics will be calculated later by the rules engine.
- Hit Points and Power use Current/Maximum resource structures.
- Current Hit Points and Current Power are intended as combat-tracked values.
- Maximum Hit Points and Maximum Power are intended to become calculated values.
- Powers will ultimately be embedded Foundry Items rather than Actor text.
- The paper character sheet's portrait/sketch box is not reproduced.
- Foundry's native Actor portrait functionality is used instead.


# 0.0.1 - Editable Character Sheet Baseline

## Milestone: Digital V&V Character Record Sheet

Status: VALIDATED

### Implemented

#### Header

- Foundry Actor portrait at upper left.
- `CHARACTER RECORD SHEET` title.
- Transparent Villains and Vigilantes logo at upper right.
- Identity and basic character information fields.

#### Powers

- Full-width `POWERS:` section reserved for future embedded Power Items.

#### Statistics

Three-column digital layout established:

1. `CHARACTERISTICS`
2. `COMBAT / RESOURCES`
3. `OTHER STATISTICS`

Combat / Resources places the two primary combat-tracked resources prominently:

- Hit Points
  - MAX
  - CURRENT
- Power
  - MAX
  - CURRENT

#### Character Information

Full-width areas provided for:

- `ORIGIN AND BACKGROUND:`
- `OTHER INFORMATION:`

Legal Status and Security Clearance are located with the Other Statistics
information rather than consuming the paper sheet's former portrait area.

### Functional Validation

Validated using `Test Character 002`.

PASS:

- Character sheet renders correctly.
- Actor portrait displays.
- V&V logo displays.
- Character Record Sheet title displays.
- Powers header displays.
- All three statistics-column headers display.
- Origin and Background header displays.
- Other Information header displays.
- All currently non-calculated fields accept user input.
- Entered data persists.
- Character sheet scrolls vertically.
- Lower character fields remain accessible.
- Origin and Background accepts long-form text.
- Other Information accepts long-form text.
- Long text fields can expand and scroll as required.
- Foundry sheet window can be resized.


# Current Known Limitations

The Crawl baseline intentionally does NOT yet automate:

- Basic Hits
- Agility Modifier
- Hit Point Modifier
- Maximum Hit Points
- Damage Modifier
- Healing Rate
- Accuracy
- Maximum Power
- Carrying Capacity
- Basic HTH Damage
- Normal Movement Rate
- Detect Hidden
- Detect Danger
- Inventing percentage
- Reaction modifiers
- Characteristic modification by Powers
- Power Items
- Power drag/drop behavior
- Character generation
- Combat automation
- Active Effects
- Derived-stat source traceability

These are deferred functionality, not defects in the validated Crawl baseline.


# Rules Implementation Policy

Development follows these rules:

1. Explicit Villains and Vigilantes rulebook text, formulas, and tables are
   authoritative.

2. Published character examples are validation/supporting evidence.

3. A published example that contradicts an explicit rule is documented as a
   discrepancy and does not override the rule.

4. Rule ambiguity is first resolved against other authoritative passages or
   tables in the rulebook.

5. Remaining ambiguity is presented for an explicit project decision rather
   than resolved by assumption.

6. Visible character-sheet terminology follows the original Villains and
   Vigilantes Character Record Sheet wherever applicable.

7. Internal data identifiers may use descriptive programming names without
   changing the terminology presented to the player.


# Development Workflow

Development uses a Crawl / Walk / Run approach.

## Crawl

Establish:

- Package structure
- Data architecture
- Installable system
- Actor support
- Manual character sheet
- Reliable persistence
- Stable UI baseline

## Walk

Planned:

- Rules engine
- Derived statistics
- Effective Characteristics
- Power Items
- Compendia
- Power modifiers
- Derived-stat traceability
- Basic dice mechanics
- Assisted character generation

## Run

Planned:

- Complete character generation
- Combat automation
- Attack matrix implementation
- Range and targeting
- Damage processing
- Active Effects
- Experience and advancement
- Full Power automation
