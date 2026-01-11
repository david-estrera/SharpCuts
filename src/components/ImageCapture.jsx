import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Webcam from 'react-webcam'

export default function ImageCapture({ onCapture }) {
  const [activeTab, setActiveTab] = useState('upload')
  const [isDragging, setIsDragging] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(null)
  const webcamRef = useRef(null)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Only set dragging to false if we're actually leaving the drop zone
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      processFile(file)
    }
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreviewUrl(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  const captureWebcam = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setPreviewUrl(imageSrc)
    }
  }, [])

  const handleConfirm = () => {
    if (previewUrl) {
      onCapture(previewUrl)
    }
  }

  const handleRetake = () => {
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'user'
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="card-elevated rounded-xl overflow-hidden">
        {/* Tab buttons */}
        <div className="flex border-b border-gold/20">
          <button
            onClick={() => { setActiveTab('upload'); setPreviewUrl(null); }}
            className={`tab-button flex-1 ${activeTab === 'upload' ? 'active' : ''}`}
          >
            UPLOAD PHOTO
          </button>
          <button
            onClick={() => { setActiveTab('webcam'); setPreviewUrl(null); }}
            className={`tab-button flex-1 ${activeTab === 'webcam' ? 'active' : ''}`}
          >
            USE CAMERA
          </button>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {previewUrl ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-gold/30">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-4">
                  <motion.button
                    onClick={handleRetake}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 border-2 border-cream/30 text-cream font-display text-lg tracking-wide rounded hover:border-gold hover:text-gold transition-all"
                  >
                    RETAKE
                  </motion.button>
                  <motion.button
                    onClick={handleConfirm}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(201, 162, 39, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-gold text-charcoal font-display text-lg tracking-wide rounded hover:bg-gold-dark transition-all gold-glow"
                  >
                    USE THIS PHOTO
                  </motion.button>
                </div>
              </motion.div>
            ) : activeTab === 'upload' ? (
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  animate={{
                    scale: isDragging ? 1.02 : 1,
                    borderColor: isDragging ? 'rgba(201, 162, 39, 0.6)' : 'rgba(201, 162, 39, 0.3)',
                    backgroundColor: isDragging ? 'rgba(201, 162, 39, 0.1)' : 'transparent'
                  }}
                  transition={{ duration: 0.2 }}
                  className="drop-zone cursor-pointer"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <motion.div 
                    className="flex flex-col items-center gap-4"
                    animate={{ y: isDragging ? -4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center"
                      animate={{ 
                        scale: isDragging ? 1.1 : 1,
                        rotate: isDragging ? 5 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg 
                        className="w-10 h-10 text-gold" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ scale: isDragging ? 1.2 : 1 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </motion.svg>
                    </motion.div>
                    <div>
                      <motion.p 
                        className="font-display text-2xl text-cream mb-2"
                        animate={{ scale: isDragging ? 1.05 : 1 }}
                      >
                        {isDragging ? 'DROP IT HERE!' : 'DROP YOUR PHOTO HERE'}
                      </motion.p>
                      <p className="font-body text-cream/60">or click to browse your files</p>
                    </div>
                    <motion.p 
                      className="text-sm text-cream/40 font-body"
                      animate={{ opacity: isDragging ? 0.6 : 0.4 }}
                    >
                      Supports JPG, PNG, WebP
                    </motion.p>
                    {isDragging && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 pointer-events-none"
                      >
                        <div className="absolute inset-0 border-4 border-dashed border-gold rounded-lg" />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="webcam"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="webcam-container border-2 border-gold/30 bg-charcoal-light">
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="w-full h-full object-cover"
                  />
                  {/* Face guide overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-64 border-2 border-gold/50 rounded-full" />
                  </div>
                </div>
                <motion.button
                  onClick={captureWebcam}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(201, 162, 39, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gold text-charcoal font-display text-xl tracking-wide rounded hover:bg-gold-dark transition-all gold-glow flex items-center justify-center gap-3"
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </motion.svg>
                  CAPTURE PHOTO
                </motion.button>
                <p className="text-center text-cream/50 font-body text-sm">
                  Position your face within the oval guide for best results
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tips section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 p-6 border border-gold/20 rounded-lg bg-charcoal-light/50"
      >
        <h3 className="font-display text-xl text-gold mb-3">TIPS FOR BEST RESULTS</h3>
        <ul className="space-y-2 font-body text-cream/70">
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            Face the camera directly with a neutral expression
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            Ensure good, even lighting on your face
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            Pull back hair from your forehead and jawline
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            Remove glasses or accessories that obscure your face
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

