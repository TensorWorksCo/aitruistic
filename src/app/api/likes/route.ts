import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { contentId } = await req.json();

    if (!contentId) {
      return NextResponse.json({ error: "Content ID required" }, { status: 400 });
    }

    // Check if already liked
    const existingLike = await db.like.findUnique({
      where: {
        userId_contentId: {
          userId: session.user.id,
          contentId,
        },
      },
    });

    if (existingLike) {
      // Unlike
      await db.like.delete({
        where: { id: existingLike.id },
      });
      return NextResponse.json({ liked: false });
    } else {
      // Like
      await db.like.create({
        data: {
          userId: session.user.id,
          contentId,
        },
      });
      return NextResponse.json({ liked: true });
    }
  } catch (error) {
    console.error("Error toggling like:", error);
    return NextResponse.json({ error: "Failed to toggle like" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  const { searchParams } = new URL(req.url);
  const contentId = searchParams.get("contentId");

  if (!contentId) {
    return NextResponse.json({ error: "Content ID required" }, { status: 400 });
  }

  try {
    const count = await db.like.count({
      where: { contentId },
    });

    let liked = false;
    if (session?.user) {
      const userLike = await db.like.findUnique({
        where: {
          userId_contentId: {
            userId: session.user.id,
            contentId,
          },
        },
      });
      liked = !!userLike;
    }

    return NextResponse.json({ count, liked });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json({ error: "Failed to fetch likes" }, { status: 500 });
  }
}
