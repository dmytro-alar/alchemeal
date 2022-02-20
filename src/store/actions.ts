import { createAction } from "typesafe-actions";
import { Actions } from "./types";
import { ElementEntriesType } from "recipes";

export const processSelectedCard = createAction(
  Actions.processSelectedCard
)<ElementEntriesType>();

export const updateCards = createAction(Actions.updateCards)();

export const updateCompoundInfo = createAction(Actions.updateCompoundInfo)();

export const resetSelections = createAction(Actions.resetSelections)();

export const setSortType = createAction(Actions.setSortType)();

export const setDeadEndsType = createAction(Actions.setDeadEndsType)();
