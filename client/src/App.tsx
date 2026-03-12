import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/Home";
import CaseStudies from "@/pages/CaseStudies";
import CustomerIntelligence from "@/pages/CustomerIntelligence";
import Onboarding from "@/pages/Onboarding";
import CXStrategy from "@/pages/CXStrategy";
import SmokeyMountainsLodge from "@/pages/SmokeyMountainsLodge";
import AskAgent from "@/pages/AskAgent";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/smoky-mountains-lodge" component={SmokeyMountainsLodge} />
      <Route path="/case-studies/ask-agent" component={AskAgent} />
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
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
