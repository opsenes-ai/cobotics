import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = { title: "Forgot password | Opsenes" };

// Placeholder action: keeps input out of the URL until auth is wired.
async function forgot() {
  "use server";
}

export default function ForgotPage() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl font-semibold">Forgot your password?</h1>
        </CardTitle>
        <CardDescription>
          Enter your email and we will send you a link to reset it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={forgot} className="grid gap-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </Field>
          </FieldGroup>
          <Button type="submit" className="w-full">
            Send reset link
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        <Link href="/auth/login" className="text-foreground underline">
          Back to log in
        </Link>
      </CardFooter>
    </Card>
  );
}
