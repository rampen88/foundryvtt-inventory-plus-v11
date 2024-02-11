import {
  Category,
  inventoryPlusItemTypeCollectionForCharacter,
  inventoryPlusItemTypeCollectionForNPC,
  inventoryPlusItemTypeCollectionForVehicle,
} from "../inventory-plus-models.js";
import { debug, i18n, isStringEquals } from "./lib.js";

// const inventory = {
//     weapon: { label: "ITEM.TypeWeaponPl", items: [], dataset: {type: "weapon"} },
//     equipment: { label: "ITEM.TypeEquipmentPl", items: [], dataset: {type: "equipment"} },
//     consumable: { label: "ITEM.TypeConsumablePl", items: [], dataset: {type: "consumable"} },
//     tool: { label: "ITEM.TypeToolPl", items: [], dataset: {type: "tool"} },
//     backpack: { label: "ITEM.TypeContainerPl", items: [], dataset: {type: "backpack"} },
//     loot: { label: "ITEM.TypeLootPl", items: [], dataset: {type: "loot"} }
// };

export const defaultSectionsForCharacters = ["weapon", "equipment", "consumable", "tool", "backpack", "loot"];

export function adjustCustomCategoriesForCharacter(customCategorys) {
  const categoryWeapon = customCategorys["weapon"];
  if (!categoryWeapon) {
    customCategorys["weapon"] = {
      label: "ITEM.TypeWeaponPl",
      dataset: { type: "weapon" },
      sortFlag: 1000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "weapon",
    };
  }
  const categoryEquipment = customCategorys["equipment"];
  if (!categoryEquipment) {
    customCategorys["equipment"] = {
      label: "ITEM.TypeEquipmentPl",
      dataset: { type: "equipment" },
      sortFlag: 2000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "equipment",
    };
  }
  const categoryConsumable = customCategorys["consumable"];
  if (!categoryConsumable) {
    customCategorys["consumable"] = {
      label: "ITEM.TypeConsumablePl",
      dataset: { type: "consumable" },
      sortFlag: 3000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "consumable",
    };
  }
  const categoryTool = customCategorys["tool"];
  if (!categoryTool) {
    customCategorys["tool"] = {
      label: "ITEM.TypeToolPl",
      dataset: { type: "tool" },
      sortFlag: 4000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "tool",
    };
  }
  const categoryBackpack = customCategorys["backpack"];
  if (!categoryBackpack) {
    customCategorys["backpack"] = {
      label: "ITEM.TypeContainerPl",
      dataset: { type: "backpack" },
      sortFlag: 5000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "backpack",
    };
  }
  const categoryLoot = customCategorys["loot"];
  if (!categoryLoot) {
    customCategorys["loot"] = {
      label: "ITEM.TypeLootPl",
      dataset: { type: "loot" },
      sortFlag: 6000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "loot",
    };
  }
  return customCategorys;
}

export function initCategoriesForCharacter(flagCategorys) {
  const flagDisableDefaultCategories = false;
  if (flagCategorys === undefined && !flagDisableDefaultCategories) {
    debug(`flagCategory=false && flagDisableDefaultCategories=false`);
    flagCategorys = {
      weapon: {
        label: "ITEM.TypeWeaponPl",
        items: [],
        dataset: { type: "weapon" },
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "weapon",
      },
      equipment: {
        label: "ITEM.TypeEquipmentPl",
        items: [],
        dataset: { type: "equipment" },
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "equipment",
      },
      consumable: {
        label: "ITEM.TypeConsumablePl",
        items: [],
        dataset: { type: "consumable" },
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "consumable",
      },
      tool: {
        label: "ITEM.TypeToolPl",
        items: [],
        dataset: { type: "tool" },
        sortFlag: 4000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "tool",
      },
      backpack: {
        label: "ITEM.TypeContainerPl",
        items: [],
        dataset: { type: "backpack" },
        sortFlag: 5000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "backpack",
      },
      loot: {
        label: "ITEM.TypeLootPl",
        items: [],
        dataset: { type: "loot" },
        sortFlag: 6000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "loot",
      },
    };
  } else if (flagCategorys && !flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=false`);
    const categoryWeapon = flagCategorys["weapon"];
    if (!categoryWeapon) {
      flagCategorys["weapon"] = {
        label: "ITEM.TypeWeaponPl",
        items: [],
        dataset: { type: "weapon" },
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "weapon",
      };
    }
    const categoryEquipment = flagCategorys["equipment"];
    if (!categoryEquipment) {
      flagCategorys["equipment"] = {
        label: "ITEM.TypeEquipmentPl",
        items: [],
        dataset: { type: "equipment" },
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "equipment",
      };
    }
    const categoryConsumable = flagCategorys["consumable"];
    if (!categoryConsumable) {
      flagCategorys["consumable"] = {
        label: "ITEM.TypeConsumablePl",
        items: [],
        dataset: { type: "consumable" },
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "consumable",
      };
    }
    const categoryTool = flagCategorys["tool"];
    if (!categoryTool) {
      flagCategorys["tool"] = {
        label: "ITEM.TypeToolPl",
        items: [],
        dataset: { type: "tool" },
        sortFlag: 4000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "tool",
      };
    }
    const categoryBackpack = flagCategorys["backpack"];
    if (!categoryBackpack) {
      flagCategorys["backpack"] = {
        label: "ITEM.TypeContainerPl",
        items: [],
        dataset: { type: "backpack" },
        sortFlag: 5000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "backpack",
      };
    }
    const categoryLoot = flagCategorys["loot"];
    if (!categoryLoot) {
      flagCategorys["loot"] = {
        label: "ITEM.TypeLootPl",
        items: [],
        dataset: { type: "loot" },
        sortFlag: 6000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForCharacter.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "loot",
      };
    }
  } else if (flagCategorys && flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=true`);
    for (const key in flagCategorys) {
      const category = flagCategorys[key];
      if (category && !category?.label) {
        continue;
      }
      if (isStringEquals(i18n(category?.label), i18n("ITEM.TypeWeaponPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("ITEM.TypeEquipmentPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("ITEM.TypeConsumablePl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("ITEM.TypeToolPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("ITEM.TypeContainerPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("ITEM.TypeLootPl"))) {
        delete flagCategorys[key];
      }
    }
  } else {
    debug(`flagCategory=false && flagDisableDefaultCategories=true`);
    if (!flagCategorys) {
      flagCategorys = {};
    }
  }
  return flagCategorys;
}

// const features = {
//     weapons: { label: game.i18n.localize("DND5E.AttackPl"), items: [], hasActions: true,
//       dataset: {type: "weapon", "weapon-type": "natural"} },
//     actions: { label: game.i18n.localize("DND5E.ActionPl"), items: [], hasActions: true,
//       dataset: {type: "feat", "activation.type": "action"} },
//     passive: { label: game.i18n.localize("DND5E.Features"), items: [], dataset: {type: "feat"} },
//     equipment: { label: game.i18n.localize("DND5E.Inventory"), items: [], dataset: {type: "loot"}}
// };

export const defaultSectionsForNPC = ["weapons", "actions", "passive", "equipment"];

export function adjustCustomCategoriesForNPC(customCategorys) {
  const categoryWeapons = customCategorys["weapons"];
  if (!categoryWeapons) {
    customCategorys["weapons"] = {
      label: game.i18n.localize("DND5E.AttackPl"),
      items: [],
      hasActions: true,
      dataset: { type: "weapon", "weapon-type": "natural" },
      sortFlag: 1000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "weapons",
    };
  }
  const categoryActions = customCategorys["actions"];
  if (!categoryActions) {
    customCategorys["actions"] = {
      label: game.i18n.localize("DND5E.ActionPl"),
      items: [],
      hasActions: true,
      dataset: { type: "feat", "activation.type": "action" },
      sortFlag: 2000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "actions",
    };
  }
  const categoryPassive = customCategorys["passive"];
  if (!categoryPassive) {
    customCategorys["passive"] = {
      label: game.i18n.localize("DND5E.Features"),
      items: [],
      dataset: { type: "feat" },
      sortFlag: 3000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "passive",
    };
  }
  const categoryEquipment = customCategorys["equipment"];
  if (!categoryEquipment) {
    customCategorys["equipment"] = {
      label: game.i18n.localize("DND5E.Inventory"),
      items: [],
      dataset: { type: "loot" },
      sortFlag: 4000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "equipment",
    };
  }
  return customCategorys;
}

export function initCategoriesForNPC(flagCategorys) {
  const flagDisableDefaultCategories = false;
  if (flagCategorys === undefined && !flagDisableDefaultCategories) {
    debug(`flagCategory=false && flagDisableDefaultCategories=false`);
    flagCategorys = {
      weapons: {
        label: game.i18n.localize("DND5E.AttackPl"),
        items: [],
        hasActions: true,
        dataset: { type: "weapon", "weapon-type": "natural" },
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "weapons",
      },
      actions: {
        label: game.i18n.localize("DND5E.ActionPl"),
        items: [],
        hasActions: true,
        dataset: { type: "feat", "activation.type": "action" },
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "actions",
      },
      passive: {
        label: game.i18n.localize("DND5E.Features"),
        items: [],
        dataset: { type: "feat" },
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "passive",
      },
      equipment: {
        label: game.i18n.localize("DND5E.Inventory"),
        items: [],
        dataset: { type: "loot" },
        sortFlag: 4000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "equipment",
      },
    };
  } else if (flagCategorys && !flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=false`);
    const categoryWeapons = flagCategorys["weapons"];
    if (!categoryWeapons) {
      flagCategorys["weapons"] = {
        label: game.i18n.localize("DND5E.AttackPl"),
        items: [],
        hasActions: true,
        dataset: { type: "weapon", "weapon-type": "natural" },
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "weapons",
      };
    }
    const categoryActions = flagCategorys["actions"];
    if (!categoryActions) {
      flagCategorys["actions"] = {
        label: game.i18n.localize("DND5E.ActionPl"),
        items: [],
        hasActions: true,
        dataset: { type: "feat", "activation.type": "action" },
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "actions",
      };
    }
    const categoryPassive = flagCategorys["passive"];
    if (!categoryPassive) {
      flagCategorys["passive"] = {
        label: game.i18n.localize("DND5E.Features"),
        items: [],
        dataset: { type: "feat" },
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "passive",
      };
    }
    const categoryEquipment = flagCategorys["equipment"];
    if (!categoryEquipment) {
      flagCategorys["equipment"] = {
        label: game.i18n.localize("DND5E.Inventory"),
        items: [],
        dataset: { type: "loot" },
        sortFlag: 4000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForNPC.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "equipment",
      };
    }
  } else if (flagCategorys && flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=true`);
    for (const key in flagCategorys) {
      const category = flagCategorys[key];
      if (category && !category?.label) {
        continue;
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.AttackPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.ActionPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.Features"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.Inventory"))) {
        delete flagCategorys[key];
      }
    }
  } else {
    debug(`flagCategory=false && flagDisableDefaultCategories=true`);
    if (!flagCategorys) {
      flagCategorys = {};
    }
  }
  return flagCategorys;
}

// const features = {
//     actions: {
//       label: game.i18n.localize("DND5E.ActionPl"),
//       items: [],
//       hasActions: true,
//       crewable: true,
//       dataset: {type: "feat", "activation.type": "crew"},
//       columns: [{
//         label: game.i18n.localize("DND5E.Cover"),
//         css: "item-cover",
//         property: "cover"
//       }]
//     },
//     equipment: {
//       label: game.i18n.localize("ITEM.TypeEquipment"),
//       items: [],
//       crewable: true,
//       dataset: {type: "equipment", "armor.type": "vehicle"},
//       columns: equipmentColumns
//     },
//     passive: {
//       label: game.i18n.localize("DND5E.Features"),
//       items: [],
//       dataset: {type: "feat"}
//     },
//     reactions: {
//       label: game.i18n.localize("DND5E.ReactionPl"),
//       items: [],
//       dataset: {type: "feat", "activation.type": "reaction"}
//     },
//     weapons: {
//       label: game.i18n.localize("ITEM.TypeWeaponPl"),
//       items: [],
//       crewable: true,
//       dataset: {type: "weapon", "weapon-type": "siege"},
//       columns: equipmentColumns
//     }
// };

export const defaultSectionsForVehicle = ["actions", "equipment", "passive", "reactions", "weapons"];

export function adjustCustomCategoriesForVehicle(customCategorys) {
  // Taken from dnd5e system
  const equipmentColumns = [
    {
      label: game.i18n.localize("DND5E.Quantity"),
      css: "item-qty",
      property: "system.quantity",
      editable: "Number",
    },
    {
      label: game.i18n.localize("DND5E.AC"),
      css: "item-ac",
      property: "system.armor.value",
    },
    {
      label: game.i18n.localize("DND5E.HP"),
      css: "item-hp",
      property: "system.hp.value",
      editable: "Number",
    },
    {
      label: game.i18n.localize("DND5E.Threshold"),
      css: "item-threshold",
      property: "threshold",
    },
  ];

  const categoryActions = customCategorys["actions"];
  if (!categoryActions) {
    customCategorys["actions"] = {
      label: game.i18n.localize("DND5E.ActionPl"),
      items: [],
      hasActions: true,
      crewable: true,
      dataset: { type: "feat", "activation.type": "crew" },
      columns: [
        {
          label: game.i18n.localize("DND5E.Cover"),
          css: "item-cover",
          property: "cover",
        },
      ],
      sortFlag: 1000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "actions",
    };
  }
  const categoryEquipment = customCategorys["equipment"];
  if (!categoryEquipment) {
    customCategorys["equipment"] = {
      label: game.i18n.localize("ITEM.TypeEquipment"),
      items: [],
      crewable: true,
      dataset: { type: "equipment", "armor.type": "vehicle" },
      columns: equipmentColumns,
      sortFlag: 2000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "equipment",
    };
  }
  const categoryPassive = customCategorys["passive"];
  if (!categoryPassive) {
    customCategorys["passive"] = {
      label: game.i18n.localize("DND5E.Features"),
      items: [],
      dataset: { type: "feat" },
      sortFlag: 3000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "passive",
    };
  }
  const categoryReactions = customCategorys["reactions"];
  if (!categoryReactions) {
    customCategorys["reactions"] = {
      label: game.i18n.localize("DND5E.ReactionPl"),
      items: [],
      dataset: { type: "feat", "activation.type": "reaction" },
      sortFlag: 4000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "reactions",
    };
  }
  const categoryWeapons = customCategorys["weapons"];
  if (!categoryWeapons) {
    customCategorys["weapons"] = {
      label: game.i18n.localize("ITEM.TypeWeaponPl"),
      crewable: true,
      dataset: { type: "weapon", "weapon-type": "siege" },
      columns: equipmentColumns,
      sortFlag: 5000,
      ignoreWeight: false,
      maxWeight: 0,
      ownWeight: 0,
      collapsed: false,
      items: [],
      explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
        return t.isInventory;
      }),
      ignoreBulk: false,
      maxBulk: 0,
      ownBulk: 0,
      customId: "weapons",
    };
  }
  return customCategorys;
}

export function initCategoriesForVehicle(flagCategorys) {
  // Taken from dnd5e system
  const equipmentColumns = [
    {
      label: game.i18n.localize("DND5E.Quantity"),
      css: "item-qty",
      property: "system.quantity",
      editable: "Number",
    },
    {
      label: game.i18n.localize("DND5E.AC"),
      css: "item-ac",
      property: "system.armor.value",
    },
    {
      label: game.i18n.localize("DND5E.HP"),
      css: "item-hp",
      property: "system.hp.value",
      editable: "Number",
    },
    {
      label: game.i18n.localize("DND5E.Threshold"),
      css: "item-threshold",
      property: "threshold",
    },
  ];

  const flagDisableDefaultCategories = false;
  if (flagCategorys === undefined && !flagDisableDefaultCategories) {
    debug(`flagCategory=false && flagDisableDefaultCategories=false`);
    flagCategorys = {
      actions: {
        label: game.i18n.localize("DND5E.ActionPl"),
        items: [],
        hasActions: true,
        crewable: true,
        dataset: { type: "feat", "activation.type": "crew" },
        columns: [
          {
            label: game.i18n.localize("DND5E.Cover"),
            css: "item-cover",
            property: "cover",
          },
        ],
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "actions",
      },
      equipment: {
        label: game.i18n.localize("ITEM.TypeEquipment"),
        items: [],
        crewable: true,
        dataset: { type: "equipment", "armor.type": "vehicle" },
        columns: equipmentColumns,
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "equipment",
      },
      passive: {
        label: game.i18n.localize("DND5E.Features"),
        items: [],
        dataset: { type: "feat" },
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "passive",
      },
      reactions: {
        label: game.i18n.localize("DND5E.ReactionPl"),
        items: [],
        dataset: { type: "feat", "activation.type": "reaction" },
        sortFlag: 4000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "reactions",
      },
      weapons: {
        label: game.i18n.localize("ITEM.TypeWeaponPl"),
        crewable: true,
        dataset: { type: "weapon", "weapon-type": "siege" },
        columns: equipmentColumns,
        sortFlag: 5000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        items: [],
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "weapons",
      },
    };
  } else if (flagCategorys && !flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=false`);
    const categoryActions = flagCategorys["actions"];
    if (!categoryActions) {
      flagCategorys["actions"] = {
        label: game.i18n.localize("DND5E.ActionPl"),
        items: [],
        hasActions: true,
        crewable: true,
        dataset: { type: "feat", "activation.type": "crew" },
        columns: [
          {
            label: game.i18n.localize("DND5E.Cover"),
            css: "item-cover",
            property: "cover",
          },
        ],
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "actions",
      };
    }
    const categoryEquipment = flagCategorys["equipment"];
    if (!categoryEquipment) {
      flagCategorys["equipment"] = {
        label: game.i18n.localize("ITEM.TypeEquipment"),
        items: [],
        crewable: true,
        dataset: { type: "equipment", "armor.type": "vehicle" },
        columns: equipmentColumns,
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "equipment",
      };
    }
    const categoryPassive = flagCategorys["passive"];
    if (!categoryPassive) {
      flagCategorys["passive"] = {
        label: game.i18n.localize("DND5E.Features"),
        items: [],
        dataset: { type: "feat" },
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "passive",
      };
    }
    const categoryReactions = flagCategorys["reactions"];
    if (!categoryReactions) {
      flagCategorys["reactions"] = {
        label: game.i18n.localize("DND5E.ReactionPl"),
        items: [],
        dataset: { type: "feat", "activation.type": "reaction" },
        sortFlag: 4000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "reactions",
      };
    }
    const categoryWeapons = flagCategorys["weapons"];
    if (!categoryWeapons) {
      flagCategorys["weapons"] = {
        label: game.i18n.localize("ITEM.TypeWeaponPl"),
        crewable: true,
        dataset: { type: "weapon", "weapon-type": "siege" },
        columns: equipmentColumns,
        sortFlag: 5000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        items: [],
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "weapons",
      };
    }
  } else if (flagCategorys && flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=true`);
    for (const key in flagCategorys) {
      const category = flagCategorys[key];
      if (category && !category?.label) {
        continue;
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.AttackPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.ActionPl"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.Features"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.Inventory"))) {
        delete flagCategorys[key];
      }
    }
  } else {
    debug(`flagCategory=false && flagDisableDefaultCategories=true`);
    if (!flagCategorys) {
      flagCategorys = {};
    }
  }
  return flagCategorys;
}

// const cargo = {
// 	crew: {
// 	  label: game.i18n.localize("DND5E.VehicleCrew"),
// 	  items: context.actor.system.cargo.crew,
// 	  css: "cargo-row crew",
// 	  editableName: true,
// 	  dataset: {type: "crew"},
// 	  columns: cargoColumns
// 	},
// 	passengers: {
// 	  label: game.i18n.localize("DND5E.VehiclePassengers"),
// 	  items: context.actor.system.cargo.passengers,
// 	  css: "cargo-row passengers",
// 	  editableName: true,
// 	  dataset: {type: "passengers"},
// 	  columns: cargoColumns
// 	},
// 	cargo: {
// 	  label: game.i18n.localize("DND5E.VehicleCargo"),
// 	  items: [],
// 	  dataset: {type: "loot"},
// 	  columns: [{
// 		label: game.i18n.localize("DND5E.Quantity"),
// 		css: "item-qty",
// 		property: "system.quantity",
// 		editable: "Number"
// 	  }, {
// 		label: game.i18n.localize("DND5E.Price"),
// 		css: "item-price",
// 		property: "system.price.value",
// 		editable: "Number"
// 	  }, {
// 		label: game.i18n.localize("DND5E.Weight"),
// 		css: "item-weight",
// 		property: "system.weight",
// 		editable: "Number"
// 	  }]
// 	}
// };

export function initCategoriesForVehicleForCargo(flagCategorys) {
  // Taken from dnd5e system
  const cargoColumns = [
    {
      label: game.i18n.localize("DND5E.Quantity"),
      css: "item-qty",
      property: "quantity",
      editable: "Number",
    },
  ];

  const flagDisableDefaultCategories = false;
  if (flagCategorys === undefined && !flagDisableDefaultCategories) {
    debug(`flagCategory=false && flagDisableDefaultCategories=false`);
    flagCategorys = {
      crew: {
        label: game.i18n.localize("DND5E.VehicleCrew"),
        items: [], // context.actor.system.cargo.crew,
        css: "cargo-row crew",
        editableName: true,
        dataset: { type: "crew" },
        columns: cargoColumns,
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "crew",
      },
      passengers: {
        label: game.i18n.localize("DND5E.VehiclePassengers"),
        items: [], // context.actor.system.cargo.passengers,
        css: "cargo-row passengers",
        editableName: true,
        dataset: { type: "passengers" },
        columns: cargoColumns,
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "passengers",
      },
      cargo: {
        label: game.i18n.localize("DND5E.VehicleCargo"),
        items: [],
        dataset: { type: "loot" },
        columns: [
          {
            label: game.i18n.localize("DND5E.Quantity"),
            css: "item-qty",
            property: "system.quantity",
            editable: "Number",
          },
          {
            label: game.i18n.localize("DND5E.Price"),
            css: "item-price",
            property: "system.price.value",
            editable: "Number",
          },
          {
            label: game.i18n.localize("DND5E.Weight"),
            css: "item-weight",
            property: "system.weight",
            editable: "Number",
          },
        ],
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "cargo",
      },
    };
  } else if (flagCategorys && !flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=false`);
    const categoryCrew = flagCategorys["crew"];
    if (!categoryCrew) {
      flagCategorys["crew"] = {
        label: game.i18n.localize("DND5E.VehicleCrew"),
        items: [], // context.actor.system.cargo.crew,
        css: "cargo-row crew",
        editableName: true,
        dataset: { type: "crew" },
        columns: cargoColumns,
        sortFlag: 1000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "crew",
      };
    }
    const categoryPassengers = flagCategorys["passengers"];
    if (!categoryPassengers) {
      flagCategorys["passengers"] = {
        label: game.i18n.localize("DND5E.VehiclePassengers"),
        items: [], // context.actor.system.cargo.passengers,
        css: "cargo-row passengers",
        editableName: true,
        dataset: { type: "passengers" },
        columns: cargoColumns,
        sortFlag: 2000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "passengers",
      };
    }
    const categoryCargo = flagCategorys["cargo"];
    if (!categoryCargo) {
      flagCategorys["cargo"] = {
        label: game.i18n.localize("DND5E.VehicleCargo"),
        items: [],
        dataset: { type: "loot" },
        columns: [
          {
            label: game.i18n.localize("DND5E.Quantity"),
            css: "item-qty",
            property: "system.quantity",
            editable: "Number",
          },
          {
            label: game.i18n.localize("DND5E.Price"),
            css: "item-price",
            property: "system.price.value",
            editable: "Number",
          },
          {
            label: game.i18n.localize("DND5E.Weight"),
            css: "item-weight",
            property: "system.weight",
            editable: "Number",
          },
        ],
        sortFlag: 3000,
        ignoreWeight: false,
        maxWeight: 0,
        ownWeight: 0,
        collapsed: false,
        explicitTypes: inventoryPlusItemTypeCollectionForVehicle.filter((t) => {
          return t.isInventory;
        }),
        ignoreBulk: false,
        maxBulk: 0,
        ownBulk: 0,
        customId: "cargo",
      };
    }
  } else if (flagCategorys && flagDisableDefaultCategories) {
    debug(`flagCategory=true && flagDisableDefaultCategories=true`);
    for (const key in flagCategorys) {
      const category = flagCategorys[key];
      if (category && !category?.label) {
        continue;
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.VehicleCrew"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.VehiclePassengers"))) {
        delete flagCategorys[key];
      }
      if (isStringEquals(i18n(category?.label), i18n("DND5E.VehicleCargo"))) {
        delete flagCategorys[key];
      }
    }
  } else {
    debug(`flagCategory=false && flagDisableDefaultCategories=true`);
    if (!flagCategorys) {
      flagCategorys = {};
    }
  }
  return flagCategorys;
}
