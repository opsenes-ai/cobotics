export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center px-4 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Cobotics
      </div>
    </footer>
  );
}
