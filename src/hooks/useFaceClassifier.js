import { useState, useRef, useCallback } from 'react'

// Backend API URL - change this to your backend URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export function useFaceClassifier() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const classify = useCallback(async (imageData) => {
    setIsLoading(true)
    setError(null)

    try {
      console.log('Sending image to backend API for classification...')
      
      // Call backend API
      const response = await fetch(`${API_URL}/classify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageData
        })
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()
      
      if (result.error) {
        throw new Error(result.error)
      }

      console.log('Classification result:', result)
      
      return {
        faceShape: result.faceShape,
        confidence: result.confidence,
        allResults: result.allResults || [],
        isFallback: result.isFallback || false
      }
    } catch (err) {
      console.error('Classification error:', err)
      setError(err.message || 'Failed to classify image')
      
      // Check if it's a network error (backend not running)
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setError('Backend API not available. Please start the backend server.')
      }
      
      // Fallback: Return a mock result for demo purposes if API fails
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

// Fallback result for demo purposes when backend API is unavailable
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

