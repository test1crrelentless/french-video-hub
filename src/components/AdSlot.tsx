import { useEffect, useRef } from 'react';

interface AdSlotProps {
  slot: 'header' | 'sidebar' | 'in-content' | 'footer' | 'popup';
  className?: string;
}

/**
 * AdSlot - Renders Clickadu Ad Scripts
 * User must replace ZONE_IDs with actual Clickadu Zone IDs.
 */
const AdSlot = ({ slot, className = '' }: AdSlotProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Clear previous ads
    container.innerHTML = '';

    // Create script element
    // const script = document.createElement('script');
    // script.async = true;
    // script.type = 'text/javascript'; 

    // Placeholder Zone IDs - TO BE REPLACED BY USER
    let zoneId = '0000000';
    let slotName = slot.toUpperCase();

    switch (slot) {
      case 'header':
        zoneId = 'YOUR_HEADER_ZONE_ID';
        break;
      case 'sidebar':
        zoneId = 'YOUR_SIDEBAR_ZONE_ID';
        break;
      case 'footer':
        zoneId = 'YOUR_FOOTER_ZONE_ID';
        break;
      case 'in-content':
        zoneId = 'YOUR_IN_CONTENT_ZONE_ID';
        break;
      case 'popup':
        zoneId = 'YOUR_POPUP_ZONE_ID';
        break;
    }

    // Clickadu Script Logic (Example pattern)
    // script.src = `//pl12345678.clickadu.com/${zoneId}/invoke.js`;
    // For now, we render a placeholder visual since we don't have real IDs

    const placeholder = document.createElement('div');
    placeholder.className = "flex h-full w-full items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-600 text-xs text-center p-2";
    placeholder.innerHTML = `
      <div>
        <div class="font-bold mb-1">CLICKADU AD ZONE</div>
        <div>Slot: ${slotName}</div>
        <div class="text-[10px] mt-1">ID: ${zoneId}</div>
      </div>
    `;
    container.appendChild(placeholder);

    // In production, uncomment this and remove placeholder:
    // container.appendChild(script);

  }, [slot]);

  // Dimensions helper helps avoid layout shift if ad doesn't load
  const getSlotDimensions = (slotType: string) => {
    switch (slotType) {
      case 'header':
        return 'h-[90px] w-full max-w-[728px] mx-auto';
      case 'sidebar':
        // Sidebar ad needs to be responsive but max out at 300px
        return 'h-[250px] w-full max-w-[300px] mx-auto';
      default:
        // Default behavior for other slots
        return 'w-full h-auto min-h-[50px]';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`ad-slot relative overflow-hidden bg-black/5 ${getSlotDimensions(slot)} ${className}`}
      aria-label={`Advertisement ${slot}`}
    />
  );
};

export default AdSlot;
