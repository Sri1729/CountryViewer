import { CountriesHydration, CountriesStore } from "./Countries";

export type RootStoreHydration = {
  countriesStore?: CountriesHydration;
};

export class RootStore {
  countries: CountriesStore;
  constructor() {
    this.countries = new CountriesStore(this);
  }
  hydrate(data: RootStoreHydration) {
    if (data.countriesStore) {
      this.countries.hydrate(data.countriesStore);
    }
  }
}
