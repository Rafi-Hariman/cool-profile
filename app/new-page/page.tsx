import type { Metadata } from "next";
import {
  Activity,
  AppWindow,
  BadgeHelp,
  Bug,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Command,
  CreditCard,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Moon,
  Search,
  Settings,
  ShieldCheck,
  SquareKanban,
  SunMedium,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "New Page",
  description: "Scratch route used to preview the admin dashboard layout.",
};

const sidebarSections = [
  {
    label: "General",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, active: true },
      { label: "Tasks", icon: SquareKanban },
      { label: "Apps", icon: AppWindow },
      { label: "Chats", icon: MessageSquare, badge: "3" },
      { label: "Users", icon: Users },
      { label: "Secured by Clerk", icon: ShieldCheck, expandable: true },
    ],
  },
  {
    label: "Pages",
    items: [
      { label: "Auth", icon: ShieldCheck, expandable: true },
      { label: "Errors", icon: Bug, expandable: true },
    ],
  },
  {
    label: "Other",
    items: [
      { label: "Settings", icon: Settings, expandable: true },
      { label: "Help Center", icon: BadgeHelp },
    ],
  },
] as const;

// TODO: wire to service
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: CircleDollarSign,
  },
  {
    title: "Subscriptions",
    value: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    description: "+201 since last hour",
    icon: Activity,
  },
];

// TODO: wire to service
const chartData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3250 },
  { month: "Mar", value: 5900 },
  { month: "Apr", value: 4050 },
  { month: "May", value: 2450 },
  { month: "Jun", value: 4150 },
  { month: "Jul", value: 2650 },
  { month: "Aug", value: 1750 },
  { month: "Sep", value: 5900 },
  { month: "Oct", value: 1750 },
  { month: "Nov", value: 4500 },
  { month: "Dec", value: 3800 },
];

// TODO: wire to service
const recentSales = [
  {
    initials: "OM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  {
    initials: "JL",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
  },
  {
    initials: "IN",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
  },
  {
    initials: "WK",
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
  },
  {
    initials: "SD",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
  },
];

const yAxisLabels = ["$6000", "$4500", "$3000", "$1500", "$0"];

function Sidebar() {
  return (
    <aside className="hidden w-[312px] shrink-0 border-r border-border/60 bg-background lg:flex lg:flex-col">
      <div className="flex h-[78px] items-center gap-3 px-7">
        <div className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background">
          <Command className="size-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Shadcn Admin</p>
          <p className="truncate text-xs text-muted-foreground">
            Vite + ShadcnUI
          </p>
        </div>

        <ChevronDown className="size-4 text-muted-foreground" />
      </div>

      <nav className="flex-1 space-y-7 overflow-y-auto px-5 py-4">
        {sidebarSections.map((section) => (
          <div key={section.label}>
            <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
              {section.label}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = "active" in item && item.active;

                return (
                  <button
                    key={item.label}
                    type="button"
                    className={cn(
                      "flex h-10 w-full items-center gap-3 rounded-lg px-2.5 text-left text-sm font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-foreground hover:bg-muted/60"
                    )}
                  >
                    <Icon className="size-[18px] shrink-0" />
                    <span className="min-w-0 flex-1 truncate">
                      {item.label}
                    </span>

                    {"badge" in item ? (
                      <Badge className="size-5 justify-center rounded-full p-0">
                        {item.badge}
                      </Badge>
                    ) : null}

                    {"expandable" in item ? (
                      <ChevronRight className="size-4 shrink-0" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border/60 p-5">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar className="size-10 rounded-lg">
            <AvatarFallback className="rounded-lg bg-muted">SN</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">satnaing</p>
            <p className="truncate text-xs text-muted-foreground">
              satnaingdev@gmail.com
            </p>
          </div>

          <ChevronDown className="size-4 text-muted-foreground" />
        </button>
      </div>
    </aside>
  );
}

function MobileSidebarButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="lg:hidden"
      aria-label="Open navigation"
    >
      <Menu className="size-5" />
    </Button>
  );
}

function Header() {
  return (
    <header className="flex h-[78px] items-center border-b border-border/60 px-4 sm:px-6">
      <MobileSidebarButton />

      <div className="ml-3 hidden items-center gap-1 md:flex lg:ml-0">
        {["Overview", "Customers", "Products", "Settings"].map((item, index) => (
          <Button
            key={item}
            variant="ghost"
            className={
              index === 0
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="relative hidden w-[312px] xl:block">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            aria-label="Search"
            placeholder="Search"
            className="h-10 pl-9 pr-14"
          />
          <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            ⌘ K
          </kbd>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-label="Search"
        >
          <Search className="size-5" />
        </Button>

        <Button variant="ghost" size="icon" aria-label="Toggle appearance">
          <Moon className="size-5 dark:block" />
          <SunMedium className="hidden size-5 dark:hidden" />
        </Button>

        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="size-5" />
        </Button>

        <Avatar className="size-10">
          <AvatarFallback className="bg-muted">SN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

function StatCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title} className="min-h-[184px]">
            <CardHeader className="flex flex-row items-center justify-between pb-7">
              <CardTitle className="text-sm font-semibold">
                {stat.title}
              </CardTitle>
              <Icon className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}

function RevenueChart() {
  return (
    <Card className="min-h-[544px]">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>

      <CardContent className="pt-3">
        <div className="flex h-[420px] gap-4">
          <div className="flex w-12 shrink-0 flex-col justify-between pb-8 text-right text-xs text-muted-foreground">
            {yAxisLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 items-end justify-between gap-2 overflow-hidden sm:gap-3">
            {chartData.map((item) => (
              <div
                key={item.month}
                className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
              >
                <div className="flex h-full w-full items-end">
                  <div
                    className="w-full rounded-t bg-primary/90 transition-opacity hover:opacity-80"
                    style={{
                      height: `${(item.value / 6000) * 100}%`,
                    }}
                    title={`${item.month}: $${item.value}`}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RecentSales() {
  return (
    <Card className="min-h-[544px]">
      <CardHeader className="pb-5">
        <CardTitle>Recent Sales</CardTitle>
        <p className="text-sm text-muted-foreground">
          You made 265 sales this month.
        </p>
      </CardHeader>

      <CardContent className="space-y-7">
        {recentSales.map((sale) => (
          <div key={sale.email} className="flex items-center gap-3">
            <Avatar className="size-10 shrink-0">
              <AvatarFallback className="bg-muted">
                {sale.initials}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{sale.name}</p>
              <p className="truncate text-sm text-muted-foreground">
                {sale.email}
              </p>
            </div>

            <p className="shrink-0 text-sm font-semibold">{sale.amount}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

          <Button className="px-5">Download</Button>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-9">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0 space-y-5">
            <StatCards />

            <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">
              <RevenueChart />
              <RecentSales />
            </section>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardContent className="py-12 text-center text-sm text-muted-foreground">
                Analytics content
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardContent className="py-12 text-center text-sm text-muted-foreground">
                Reports content
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardContent className="py-12 text-center text-sm text-muted-foreground">
                Notifications content
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-20">
          <Separator />
          <p className="py-6 text-center text-sm text-muted-foreground">
            © 2026 All rights reserved by{" "}
            <span className="font-medium text-foreground">Sat Naing</span>
            {" • "}
            Distributed by{" "}
            <span className="font-medium text-foreground">ThemeWagon</span>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function NewPage() {
  return (
    <div className="dark flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
