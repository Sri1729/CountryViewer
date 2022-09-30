import {
  action,
  computed,
  makeAutoObservable,
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
  allCountries: Country[] = [];
  _searchText: string = "";
  _selectedRegion: String = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  hydrate(data?: CountriesHydration) {
    if (data) {
      this.allCountries = data.data;
    }
  }

  public set searchText(val: string) {
    runInAction(() => {
      this._searchText = val;
    });
  }

  public get searchText(): string {
    return this._searchText;
  }

  public get countriesList(): Country[] {
    return this.allCountries
      .filter((item) =>
        item.name.common.toLowerCase().includes(this._searchText.toLowerCase())
      )
      .filter((item) =>
        !!this._selectedRegion ? item.region === this._selectedRegion : true
      );
  }

  public get regionsList(): String[] {
    return this.allCountries
      .map((item) => item.region)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
  }

  public set selectedRegion(val: String) {
    runInAction(() => {
      this._selectedRegion = val;
    });
  }

  public get selectedRegion(): String {
    return this._selectedRegion;
  }
}
