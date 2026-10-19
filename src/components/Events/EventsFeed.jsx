// src/components/Events/EventsFeed.jsx
// Upcoming and past events, published from the portal admin (Events → "Public",
// then "Publish website"). Data and photos are copied into the site at build
// time by scripts/fetch-events.mjs, so nothing here talks to the portal.
import { useState } from "react";
import { Box, Typography, Dialog, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const MotionBox = motion.create(Box);

const C = {
  bg: "#06030A",
  card: "rgba(15,8,20,0.75)",
  border: "rgba(124,27,50,0.2)",
  borderHover: "rgba(124,27,50,0.55)",
  crimson: "#7C1B32",
  rose: "#E94B6E",
  text: "#FDE8E0",
  muted: "rgba(253,232,224,0.55)",
  faint: "rgba(253,232,224,0.4)",
};

const TZ = "America/Chicago";
const dayFmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", month: "short", day: "numeric", year: "numeric" });
const timeFmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" });
const shortFmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, month: "short", day: "numeric" });
const sameDay = (a, b) => dayFmt.format(a) === dayFmt.format(b);

export function formatWhen(startIso, endIso) {
  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : null;
  if (end && !sameDay(start, end)) return `${shortFmt.format(start)} – ${dayFmt.format(end)}`;
  const time = timeFmt.format(start);
  const hasTime = time !== "12:00 AM";
  return hasTime ? `${dayFmt.format(start)} · ${time}${end ? ` – ${timeFmt.format(end)}` : ""}` : dayFmt.format(start);
}

function SectionHeading({ title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, mb: 2.5 }}>
        <Box sx={{ width: 44, height: "1px", background: "rgba(124,27,50,0.45)" }} />
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: C.crimson }} />
        <Box sx={{ width: 44, height: "1px", background: "rgba(124,27,50,0.45)" }} />
      </Box>
      <Typography component="h2" sx={{
        fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
        color: C.text, fontWeight: 400, letterSpacing: "0.03em", textShadow: "0 4px 24px rgba(124,27,50,0.45)",
        mb: 1.5, lineHeight: 1.1,
      }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ fontFamily: "'Crimson Text', serif", fontSize: { xs: "1.05rem", md: "1.15rem" }, color: "rgba(253,232,224,0.5)", maxWidth: 520, mx: "auto", lineHeight: 1.75 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

function UpcomingCard({ event, index }) {
  const image = event.posterUrl || event.coverUrl;
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      sx={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: "14px", backdropFilter: "blur(12px)",
        overflow: "hidden", display: "grid", gridTemplateColumns: { xs: "1fr", md: image ? "280px 1fr" : "1fr" },
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": { borderColor: C.borderHover, boxShadow: "0 8px 40px rgba(124,27,50,0.2)", transform: "translateY(-3px)" },
      }}
    >
      {image && (
        <Box component="img" src={image} alt={event.title} loading="lazy"
          sx={{ width: "100%", height: { xs: 220, md: "100%" }, minHeight: { md: 240 }, objectFit: "cover", display: "block" }} />
      )}
      <Box sx={{ px: { xs: 3.5, md: 5 }, py: { xs: 3.5, md: 4 }, minWidth: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
          <Calendar size={14} style={{ color: C.crimson, flexShrink: 0 }} />
          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem", color: "rgba(253,232,224,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {formatWhen(event.eventDate, event.endDate)}
          </Typography>
        </Box>
        <Typography component="h3" sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.7rem", md: "2.1rem" }, color: C.text, lineHeight: 1.2, mb: 1.5 }}>
          {event.title}
        </Typography>
        {event.location && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
            <MapPin size={14} style={{ color: C.crimson, flexShrink: 0 }} />
            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.88rem", color: C.faint, letterSpacing: "0.03em" }}>
              {event.location}
            </Typography>
          </Box>
        )}
        {event.description && (
          <>
            <Box sx={{ width: "100%", height: "1px", background: "rgba(124,27,50,0.15)", mb: 2 }} />
            <Typography sx={{ fontFamily: "'Crimson Text', serif", fontSize: { xs: "1rem", md: "1.1rem" }, color: C.muted, lineHeight: 1.65, fontStyle: "italic", whiteSpace: "pre-line" }}>
              {event.description}
            </Typography>
          </>
        )}
        {event.signupUrl && (
          <Box component="a" href={event.signupUrl} target="_blank" rel="noopener noreferrer"
            sx={{
              display: "inline-flex", alignItems: "center", gap: 1, mt: 3, px: 2.5, py: 1.1, borderRadius: "999px",
              border: `1px solid ${C.rose}`, color: C.text, textDecoration: "none",
              fontFamily: "'Roboto', sans-serif", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "background 0.25s ease", "&:hover": { background: "rgba(233,75,110,0.15)" },
            }}>
            Register <ExternalLink size={14} />
          </Box>
        )}
      </Box>
    </MotionBox>
  );
}

function PastCard({ event, index, onOpen }) {
  const image = event.coverUrl || event.photos[0]?.url || event.posterUrl;
  const count = event.photos.length;
  return (
    <MotionBox
      component="button" type="button" onClick={onOpen}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      sx={{
        p: 0, textAlign: "left", cursor: "pointer", font: "inherit", color: "inherit",
        background: C.card, border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        "&:hover": { borderColor: C.borderHover, transform: "translateY(-3px)" },
        "&:focus-visible": { outline: `2px solid ${C.rose}`, outlineOffset: 2 },
      }}
    >
      <Box sx={{ position: "relative", aspectRatio: "4 / 3", background: "rgba(124,27,50,0.12)" }}>
        {image && <Box component="img" src={image} alt={event.title} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
        {count > 0 && (
          <Box sx={{ position: "absolute", right: 10, bottom: 10, px: 1.2, py: 0.4, borderRadius: "999px", background: "rgba(6,3,10,0.75)", fontFamily: "'Roboto', sans-serif", fontSize: "0.72rem", color: C.text, letterSpacing: "0.05em" }}>
            {count} photo{count === 1 ? "" : "s"}
          </Box>
        )}
      </Box>
      <Box sx={{ px: 2.5, py: 2.2 }}>
        <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.72rem", color: "rgba(253,232,224,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.8 }}>
          {formatWhen(event.eventDate, event.endDate)}
        </Typography>
        <Typography component="h3" sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: "1.45rem", color: C.text, lineHeight: 1.25 }}>
          {event.title}
        </Typography>
      </Box>
    </MotionBox>
  );
}

function EventViewer({ event, onClose }) {
  const [i, setI] = useState(0);
  if (!event) return null;
  const photos = event.photos.length ? event.photos : [event.coverUrl || event.posterUrl].filter(Boolean).map((url) => ({ url, alt: event.title }));
  const photo = photos[i];
  const go = (d) => setI((v) => (v + d + photos.length) % photos.length);
  return (
    <Dialog open onClose={onClose} maxWidth="md" fullWidth
      slotProps={{ paper: { sx: { background: C.bg, border: `1px solid ${C.border}`, borderRadius: "14px", backgroundImage: "none" } } }}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}>
      <IconButton aria-label="Close" onClick={onClose} sx={{ position: "absolute", right: 8, top: 8, color: C.text, zIndex: 2, background: "rgba(6,3,10,0.6)" }}>
        <X size={18} />
      </IconButton>
      {photo && (
        <Box sx={{ position: "relative", background: "#000" }}>
          <Box component="img" src={photo.url} alt={photo.alt || event.title} sx={{ width: "100%", maxHeight: "65vh", objectFit: "contain", display: "block" }} />
          {photos.length > 1 && (
            <>
              <IconButton aria-label="Previous photo" onClick={() => go(-1)} sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", color: C.text, background: "rgba(6,3,10,0.6)" }}><ChevronLeft size={20} /></IconButton>
              <IconButton aria-label="Next photo" onClick={() => go(1)} sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", color: C.text, background: "rgba(6,3,10,0.6)" }}><ChevronRight size={20} /></IconButton>
              <Box sx={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", px: 1.2, py: 0.3, borderRadius: "999px", background: "rgba(6,3,10,0.7)", color: C.text, fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem" }}>
                {i + 1} / {photos.length}
              </Box>
            </>
          )}
        </Box>
      )}
      <Box sx={{ px: { xs: 3, md: 4 }, py: 3 }}>
        <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem", color: "rgba(253,232,224,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", mb: 1 }}>
          {formatWhen(event.eventDate, event.endDate)}{event.location ? ` · ${event.location}` : ""}
        </Typography>
        <Typography component="h3" sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.6rem", md: "2rem" }, color: C.text, mb: 1.5 }}>
          {event.title}
        </Typography>
        {(event.writeup || event.description) && (
          <Typography sx={{ fontFamily: "'Crimson Text', serif", fontSize: "1.08rem", color: C.muted, lineHeight: 1.7, whiteSpace: "pre-line" }}>
            {event.writeup || event.description}
          </Typography>
        )}
      </Box>
    </Dialog>
  );
}

export default function EventsFeed({ upcoming = [], past = [] }) {
  const [open, setOpen] = useState(null);
  if (!upcoming.length && !past.length) return null;
  return (
    <Box component="section" sx={{ position: "relative", backgroundColor: C.bg, py: { xs: 10, md: 14 }, px: 2, overflow: "hidden" }}>
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(124,27,50,0.18) 0%, rgba(6,3,10,0) 40%, rgba(124,27,50,0.12) 100%)", pointerEvents: "none" }} />
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1100, mx: "auto", px: { xs: 1, md: 3 } }}>
        {upcoming.length > 0 && (
          <Box sx={{ mb: past.length ? { xs: 12, md: 16 } : 0 }}>
            <SectionHeading title="Upcoming Events" subtitle="Join us for these upcoming celebrations of dance and culture" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {upcoming.map((e, idx) => <UpcomingCard key={e.id} event={e} index={idx} />)}
            </Box>
          </Box>
        )}
        {past.length > 0 && (
          <Box>
            <SectionHeading title="Past Performances" subtitle="Moments from our recitals, festivals and community programs" />
            <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" } }}>
              {past.map((e, idx) => <PastCard key={e.id} event={e} index={idx} onOpen={() => setOpen(e)} />)}
            </Box>
          </Box>
        )}
      </Box>
      {open && <EventViewer key={open.id} event={open} onClose={() => setOpen(null)} />}
    </Box>
  );
}
