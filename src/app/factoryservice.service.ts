import { PrimeService } from "./prime.service";
import { MockService } from "./mock.service";
import { Mock2Service } from "./mock2.service";

export function serviceFactory(service: number) {
  switch (service) {
    case 1:
      return new PrimeService();
      break;
    case 2:
      return new MockService();
      break;
    case 3:
      return new Mock2Service();
      break;
    default: 
      return new PrimeService();
}
}