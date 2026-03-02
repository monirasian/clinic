import {
  InjectionToken
} from "./chunk-JCLQJVGK.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiBaseUrl: "/api"
};

// src/app/api.config.ts
var API_BASE_URL = new InjectionToken("API_BASE_URL", {
  factory: () => environment.apiBaseUrl
});

export {
  environment,
  API_BASE_URL
};
//# sourceMappingURL=chunk-KAR7HZ5G.js.map
