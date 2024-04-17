ServerEvents.recipes((event) => {
  //Remove Autumnity Pancakes
  event.remove({ output: "autumnity:pancake" });

  //Remove FD Fried Egg
  event.remove({ output: "farmersdelight:fried_egg" });

  //Remove FD Milk Bottle
  //event.remove({ output: "farmersdelight:milk_bottle" });

  //Rope
  event.shaped("3x supplementaries:rope", ["S", "S", "S"], {
    S: "farmersdelight:straw",
  });

  //   event.shaped("3x supplementaries:rope", ["Y", "Y", "Y"], {
  //     Y: "environmental:yak_hair",
  //   });

  event.shaped("minecraft:lead", ["RR ", "RR ", "  R"], {
    R: "supplementaries:rope",
  });

  event.shaped("farmersdelight:safety_net", ["RR", "RR"], {
    R: "supplementaries:rope",
  });

  event.remove({ output: "farmersdelight:rope" });

  event.remove({ id: "farmersdelight:safety_net" });
  event.remove({ id: "farmersdelight:lead_from_rope" });

  //Buzzier bees apple
  event.remove({ output: "buzzier_bees:honey_apple" });
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("farmersdelight:rope", "supplementaries:rope", true)
    .replaceLoot("farmersdelight:fried_egg", "incubation:fried_egg", true)
    .replaceLoot("autumnity:pancake", "supplementaries:pancake", true)
    .replaceLoot("buzzier_bees:honey_apple", "create:honeyed_apple", true);
});
