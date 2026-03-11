import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import CaseStudies from "@/pages/CaseStudies";
import CustomerIntelligence from "@/pages/CustomerIntelligence";
import Onboarding from "@/pages/Onboarding";
import CXStrategy from "@/pages/CXStrategy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/services/customer-intelligence" component={CustomerIntelligence} />
      <Route path="/services/onboarding" component={Onboarding} />
      <Route path="/services/cx-strategy" component={CXStrategy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
