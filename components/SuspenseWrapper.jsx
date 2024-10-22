// Wrapping the UpdatePromptPage in a Suspense boundary
export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptPage />
    </Suspense>
  );
}