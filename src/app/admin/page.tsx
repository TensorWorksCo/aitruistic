import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

const stats = [
  { label: "Total Users", value: "1,234", trend: "+12%" },
  { label: "Published Content", value: "56", trend: "+8%" },
  { label: "Comments", value: "892", trend: "+23%" },
  { label: "Active Topics", value: "6", trend: "0%" },
];

const quickActions = [
  { label: "Add Article", href: "/admin/content/new?type=article" },
  { label: "Add Video", href: "/admin/content/new?type=video" },
  { label: "Manage Users", href: "/admin/users" },
  { label: "Review Comments", href: "/admin/comments" },
  { label: "Site Settings", href: "/admin/settings" },
];

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin?callbackUrl=/admin");
  }

  const isAdmin = session.user.role === "ADMIN";
  const isModerator = session.user.role === "MODERATOR" || isAdmin;

  if (!isModerator) {
    redirect("/");
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            {isAdmin ? "Admin Dashboard" : "Moderator Panel"}
          </h1>
          <p className="text-muted-foreground">
            Manage content, users, and site settings
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend.startsWith("+") ? "text-primary" : ""}>
                  {stat.trend}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2"
              asChild
            >
              <Link href={action.href}>
                {action.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Content</CardTitle>
            <CardDescription>Latest published articles and videos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Understanding AI Alignment", type: "Article", date: "Dec 10, 2024" },
                { title: "The Economics of Automation", type: "Video", date: "Dec 8, 2024" },
                { title: "AI Policy Frameworks", type: "Article", date: "Dec 5, 2024" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 px-0" asChild>
              <Link href="/admin/content">View all content →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Comments</CardTitle>
            <CardDescription>Comments requiring moderation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "John D.", content: "Great article on alignment...", date: "2h ago" },
                { user: "Sarah M.", content: "I have a question about...", date: "5h ago" },
                { user: "Mike R.", content: "This is really helpful...", date: "1d ago" },
              ].map((comment, index) => (
                <div key={index} className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-medium">{comment.user}</p>
                    <p className="text-sm text-muted-foreground truncate">{comment.content}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {comment.date}
                  </span>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 px-0" asChild>
              <Link href="/admin/comments">View all comments →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
