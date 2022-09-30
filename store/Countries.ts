import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { RootStore } from ".";
import { Country } from "../types";

export type CountriesHydration = {
  data: Country[];
};

export class CountriesStore {
  root: RootStore;
  countries: Country[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      countries: observable,
    });
  }

  hydrate(data?: CountriesHydration) {
    if (data) {
      this.countries = data.data;
    }
  }
}
