import React from 'react'

const DownloadIcon = ({iconStyling}: {iconStyling: string}) => {
  return (
    <svg className={iconStyling} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Download</title>
      <path d="M19.92,12.08L12,20L4.08,12.08L5.5,10.67L11,16.17V2H13V16.17L18.5,10.66L19.92,12.08M12,20H2V22H22V20H12Z" />
    </svg>
  )
}

export default DownloadIcon;