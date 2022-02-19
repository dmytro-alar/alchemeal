import { createAction } from "typesafe-actions";
import { Actions } from "./types";
import { ElementEntriesType } from "recipes";

export const processSelectedCard = createAction(
  Actions.processSelectedCard
)<ElementEntriesType>();

export const updateCards = createAction(Actions.updateCards)();
