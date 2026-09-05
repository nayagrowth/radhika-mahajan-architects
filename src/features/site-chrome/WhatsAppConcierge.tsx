"use client";

import React from "react";
import styles from "./site-chrome.module.css";

interface WhatsAppConciergeProps {
  phone?: string;
  defaultMessage?: string;
}

export function WhatsAppConcierge({
  phone = "919876543210",
  defaultMessage = "Hello Ar. Radhika Mahajan, I would like to discuss an architectural / interior design project with your studio.",
}: WhatsAppConciergeProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloating}
      aria-label="Direct architectural consultation with Ar. Radhika Mahajan on WhatsApp"
      data-ac-event="public.global.whatsapp_floating_clicked"
    >
      <span className={styles.whatsappPulsePip} aria-hidden="true" />
      <div className={styles.whatsappTextCol}>
        <span className={styles.whatsappLabel}>WhatsApp Studio</span>
        <span className={styles.whatsappSub}>Direct Dialogue · Ar. Radhika</span>
      </div>
      <span className={styles.whatsappArrow} aria-hidden="true">↗</span>
    </a>
  );
}
