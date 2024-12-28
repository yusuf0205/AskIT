import React from 'react'
import './Language.css'


const Language = () => {
  return (
    <div className="language-selector">
      <h3 className="title">Set language</h3>
      <p className="subtitle">Select your preferred language</p>
      <label htmlFor="language" className="label">
        Language
      </label>
      <select id="language" className="dropdown">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="chinese">Chinese (Simplified)</option>
        <option value="chinese-traditional">Chinese (Traditional)</option>
        <option value="japanese">Japanese</option>
        <option value="korean">Korean</option>
        <option value="hindi">Hindi</option>
        <option value="arabic">Arabic</option>
        <option value="portuguese">Portuguese</option>
        <option value="russian">Russian</option>
        <option value="italian">Italian</option>
        <option value="turkish">Turkish</option>
        <option value="dutch">Dutch</option>
        <option value="swedish">Swedish</option>
        <option value="danish">Danish</option>
        <option value="norwegian">Norwegian</option>
        <option value="finnish">Finnish</option>
        <option value="greek">Greek</option>
        <option value="thai">Thai</option>
        <option value="vietnamese">Vietnamese</option>
        <option value="polish">Polish</option>
        <option value="ukrainian">Ukrainian</option>
        <option value="hebrew">Hebrew</option>
        <option value="czech">Czech</option>
        <option value="hungarian">Hungarian</option>
        <option value="romanian">Romanian</option>
        <option value="indonesian">Indonesian</option>
        <option value="malay">Malay</option>
        <option value="filipino">Filipino</option>
        <option value="swahili">Swahili</option>
        <option value="bengali">Bengali</option>
        <option value="tamil">Tamil</option>
        <option value="telugu">Telugu</option>
        <option value="marathi">Marathi</option>
        <option value="urdu">Urdu</option>
        <option value="persian">Persian</option>
        <option value="punjabi">Punjabi</option>
        <option value="gujarati">Gujarati</option>
        <option value="amharic">Amharic</option>
        <option value="somali">Somali</option>
        {/* Add additional languages as needed */}
      </select>
    </div>
  )
}

export default Language