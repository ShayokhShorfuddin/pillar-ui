import { useMediaQuery } from '../useMediaQuery'
import type { UseMediaQueryOptions } from '../useMediaQuery'

/**
 * Custom hook to create a persistent callback that maintains its reference between renders.
 *
 * @template T - The type of the callback function.
 *
 * @param {T | undefined} callback - The callback function to be persisted.
 * @returns {T | undefined} - The persisted callback function.
 *
 * @example
 * // Example usage in a functional component:
 * import { useState } from 'react';
 * import { usePersistentCallback } from '@pillar-ui/hooks'; // Adjust the path accordingly
 *
 * function CallbackComponent() {
 *   const [count, setCount] = useState(0);
 *
 *   // Create a callback function that persists its reference between renders
 *   const handleClick = usePersistentCallback(() => {
 *     setCount((prevCount) => prevCount + 1);
 *   });
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={handleClick}>Increment</button>
 *     </div>
 *   );
 * }
 */
export function usePreferColorScheme(initialValue?: 'dark' | 'light', options?: UseMediaQueryOptions) {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark', options) ? 'dark' : 'light'
}
