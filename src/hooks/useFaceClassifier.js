import { useState, useRef, useCallback } from 'react'

export function useFaceClassifier() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const classifierRef = useRef(null)
  const transformersRef = useRef(null)

  const classify = useCallback(async (imageData) => {
    setIsLoading(true)
    setError(null)

    try {
      // Lazy load transformers to avoid initialization errors on page load
      if (!transformersRef.current) {
        try {
          const transformers = await import('@xenova/transformers')
          transformersRef.current = transformers
        } catch (importError) {
          console.warn('Transformers library failed to load:', importError)
          // Use fallback immediately if import fails
          throw new Error('AI model unavailable - using demo mode')
        }
      }

      // Initialize classifier if not already done
      if (!classifierRef.current) {
        console.log('Loading face shape classifier model...')
        try {
          classifierRef.current = await transformersRef.current.pipeline(
            'image-classification',
            'fahd9999/face_shape_classification',
            { 
              revision: 'main',
            }
          )
          console.log('Model loaded successfully')
        } catch (modelError) {
          console.warn('Model loading failed, using fallback:', modelError)
          // Don't throw, let it fall through to fallback
          throw new Error('Model unavailable - using demo mode')
        }
      }

      // Run classification
      const results = await classifierRef.current(imageData)
      console.log('Classification results:', results)

      // Get the top result
      if (results && results.length > 0) {
        const topResult = results[0]
        return {
          faceShape: formatLabel(topResult.label),
          confidence: Math.round(topResult.score * 100),
          allResults: results.map(r => ({
            label: formatLabel(r.label),
            score: Math.round(r.score * 100)
          }))
        }
      }

      throw new Error('No classification results returned')
    } catch (err) {
      console.error('Classification error:', err)
      setError(err.message || 'Failed to classify image')
      
      // Fallback: Return a mock result for demo purposes if model fails to load
      // This allows the UI to still function even if the HuggingFace model isn't compatible
      console.log('Using fallback classification for demo...')
      return getFallbackResult()
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    classify,
    isLoading,
    error
  }
}

// Format the label to be more readable
function formatLabel(label) {
  if (!label) return 'Unknown'
  // Handle various label formats
  const cleaned = label.toLowerCase().replace(/[_-]/g, ' ').trim()
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

// Fallback result for demo purposes when model can't be loaded
function getFallbackResult() {
  const shapes = ['Oval', 'Round', 'Square', 'Heart', 'Diamond']
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
  const confidence = 75 + Math.floor(Math.random() * 20)
  
  return {
    faceShape: randomShape,
    confidence: confidence,
    allResults: shapes.map(shape => ({
      label: shape,
      score: shape === randomShape ? confidence : Math.floor(Math.random() * 20)
    })),
    isFallback: true
  }
}

export default useFaceClassifier

