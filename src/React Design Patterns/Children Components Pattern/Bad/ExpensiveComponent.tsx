export default function ExpensiveComponent() {
  const startTime = performance.now();

  while (performance.now() - startTime < 1000) {
    // Do nothing
  }
  console.log("Expensive Component");
  // Do nothing for
  return (
    <div>
      <h1>Expensive Component</h1>
    </div>
  );
}
