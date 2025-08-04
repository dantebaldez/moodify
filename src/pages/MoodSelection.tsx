import MoodSelection from '../pages/MoodSelection';

// ...

<Route
  path="/mood"
  element={
    <ProtectedRoute>
      <MoodSelection />
    </ProtectedRoute>
  }
/>
