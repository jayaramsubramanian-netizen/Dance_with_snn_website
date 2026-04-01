// import { Box, Typography } from "@mui/material";
// import { useState } from "react";

// import P1 from "../../assets/Pictures/StudentPic1.webp";
// import P2 from "../../assets/Pictures/StudentPic2.webp";
// import P3 from "../../assets/Pictures/StudentPic3.webp";
// import P4 from "../../assets/Pictures/StudentPic4.webp";
// import P6 from "../../assets/Pictures/StudentPic6.webp";
// import P7 from "../../assets/Pictures/StudentPic7.webp";
// import D1 from "../../assets/Natyam/dance1.webp";
// import D2 from "../../assets/Natyam/dance2.webp";
// import D3 from "../../assets/Natyam/dance3.webp";
// import D4 from "../../assets/Natyam/dance4.webp";
// import D5 from "../../assets/Natyam/dance5.webp";
// import BG from "../../assets/Portal.webp";
// import CL from "../../assets/claasesPic.webp";

// const TABS = [
//   {
//     label: "Natyalaya Showcases",
//     images: [
//       { src: D1, label: "Classical Form",    span: 2 },
//       { src: D2, label: "Stage Moments",     span: 1 },
//       { src: D3, label: "Performance",       span: 1 },
//       { src: D4, label: "Abhinaya",          span: 2 },
//       { src: D5, label: "Adavu Mastery",     span: 2 },
//     ],
//   },
//   {
//     label: "Community Events",
//     images: [
//       { src: P1, label: "Student Recital",   span: 1 },
//       { src: P2, label: "Student Recital",   span: 2 },
//       { src: P3, label: "Student Recital",   span: 1 },
//       { src: P4, label: "Student Recital",   span: 2 },
//       { src: P7, label: "Student Recital",   span: 2 },
//     ],
//   },
//   {
//     label: "Behind the Scenes",
//     images: [
//       { src: BG, label: "The Studio",        span: 2 },
//       { src: CL, label: "Class Practice",    span: 2 },
//       { src: P6, label: "Rehearsal",         span: 1 },
//       { src: P7, label: "Rehearsal",         span: 1 },
//       { src: P3, label: "Practice Session",  span: 2 },
//     ],
//   },
// ];

// /* ── Lightbox ── */
// function Lightbox({ src, label, onClose }) {
//   return (
//     <Box
//       onClick={onClose}
//       sx={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 1000,
//         background: "rgba(0,0,0,0.93)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         cursor: "zoom-out",
//         px: 3,
//       }}
//     >
//       <Box
//         onClick={(e) => e.stopPropagation()}
//         sx={{
//           position: "relative",
//           maxWidth: "900px",
//           maxHeight: "80vh",
//           width: "100%",
//           borderRadius: "12px",
//           overflow: "hidden",
//           boxShadow: "0 0 0 1px rgba(124,27,50,0.4), 0 32px 80px rgba(0,0,0,0.8)",
//         }}
//       >
//         <Box
//           component="img"
//           src={src}
//           alt={label}
//           sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
//         />
//       </Box>

//       <Typography
//         sx={{
//           mt: 2.5,
//           fontFamily: "'Crimson Text', serif",
//           fontSize: "1.1rem",
//           color: "rgba(253,232,224,0.65)",
//           letterSpacing: "0.06em",
//           fontStyle: "italic",
//         }}
//       >
//         {label}
//       </Typography>
//       <Typography
//         sx={{
//           mt: 0.5,
//           fontFamily: "'Inter', sans-serif",
//           fontSize: "0.72rem",
//           color: "rgba(255,255,255,0.25)",
//           letterSpacing: "0.1em",
//           textTransform: "uppercase",
//         }}
//       >
//         Click anywhere to close
//       </Typography>
//     </Box>
//   );
// }

// /* ── Gallery Card ── */
// function GalleryCard({ item, onClick }) {
//   return (
//     <Box
//       onClick={onClick}
//       sx={{
//         gridColumn: `span ${item.span}`,
//         position: "relative",
//         borderRadius: "12px",
//         overflow: "hidden",
//         cursor: "zoom-in",
//         height: "100%",
//         background: "#0a0308",
//         border: "1px solid rgba(124,27,50,0.2)",
//         "&:hover .gallery-img": {
//           transform: "scale(1.06)",
//         },
//         "&:hover .gallery-overlay": {
//           opacity: 1,
//         },
//         "&:hover": {
//           boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,27,50,0.5)",
//           borderColor: "rgba(124,27,50,0.5)",
//         },
//         transition: "box-shadow 0.3s ease, border-color 0.3s ease",
//       }}
//     >
//       <Box
//         component="img"
//         src={item.src}
//         alt={item.label}
//         className="gallery-img"
//         sx={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           objectPosition: "center",
//           display: "block",
//           transition: "transform 0.5s cubic-bezier(0.25,0.1,0.25,1)",
//         }}
//       />

//       <Box
//         className="gallery-overlay"
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(124,27,50,0.2) 50%, transparent 100%)",
//           opacity: 0,
//           transition: "opacity 0.3s ease",
//           display: "flex",
//           alignItems: "flex-end",
//           p: "20px 22px",
//         }}
//       >
//         <Box>
//           <Box sx={{ width: 24, height: "1.5px", background: "#E94B6E", borderRadius: 1, mb: 1 }} />
//           <Typography
//             sx={{
//               fontFamily: "'Berkshire Swash', cursive",
//               fontSize: { xs: "1rem", md: "1.1rem" },
//               color: "#fff",
//               lineHeight: 1.2,
//               textShadow: "0 2px 8px rgba(0,0,0,0.8)",
//             }}
//           >
//             {item.label}
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// /* ══════════════════════════════════════════════
//    SECTION
// ══════════════════════════════════════════════ */
// export default function GallerySection() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [lightbox, setLightbox] = useState(null);

//   const currentImages = TABS[activeTab].images;

//   return (
//     <>
//       {lightbox !== null && (
//         <Lightbox
//           src={currentImages[lightbox].src}
//           label={currentImages[lightbox].label}
//           onClose={() => setLightbox(null)}
//         />
//       )}

//       <Box
//         component="section"
//         sx={{
//           position: "relative",
//           backgroundColor: "#06030A",
//           py: { xs: 10, md: 14 },
//           px: 2,
//           overflow: "hidden",
//         }}
//       >
//         {/* Ambient glows — static, no animation */}
//         <Box sx={{
//           position: "absolute", top: "5%", left: "3%",
//           width: 360, height: 360, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(124,27,50,0.1) 0%, transparent 70%)",
//           filter: "blur(70px)", zIndex: 0, pointerEvents: "none",
//         }} />
//         <Box sx={{
//           position: "absolute", bottom: "5%", right: "3%",
//           width: 300, height: 300, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(124,27,50,0.08) 0%, transparent 70%)",
//           filter: "blur(70px)", zIndex: 0, pointerEvents: "none",
//         }} />

//         <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1400px", mx: "auto", px: 3 }}>

//           {/* Section header */}
//           <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
//             <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, mb: 2.2 }}>
//               <Box sx={{ width: 44, height: "1px", background: "rgba(124,27,50,0.45)" }} />
//               <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#7C1B32" }} />
//               <Box sx={{ width: 44, height: "1px", background: "rgba(124,27,50,0.45)" }} />
//             </Box>

//             <Typography
//               component="h2"
//               sx={{
//                 fontFamily: "'Berkshire Swash', cursive",
//                 fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
//                 color: "#FDE8E0",
//                 fontWeight: 400,
//                 letterSpacing: "0.03em",
//                 textShadow: "0 4px 24px rgba(124,27,50,0.45)",
//                 mb: 1.5,
//                 lineHeight: 1.1,
//               }}
//             >
//               Gallery
//             </Typography>

//             <Typography
//               sx={{
//                 fontFamily: "'Crimson Text', serif",
//                 fontSize: { xs: "1.05rem", md: "1.15rem" },
//                 color: "rgba(253,232,224,0.5)",
//                 maxWidth: "520px",
//                 mx: "auto",
//                 lineHeight: 1.75,
//               }}
//             >
//               Moments from the studio, stage, and celebrations
//             </Typography>
//           </Box>

//           {/* Tabs */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               gap: { xs: 1, md: 1.5 },
//               mb: { xs: 6, md: 8 },
//               flexWrap: "wrap",
//             }}
//           >
//             {TABS.map((tab, i) => (
//               <Box
//                 key={tab.label}
//                 onClick={() => { setActiveTab(i); setLightbox(null); }}
//                 sx={{
//                   cursor: "pointer",
//                   px: { xs: 2.5, md: 3.5 },
//                   py: { xs: 1, md: 1.2 },
//                   borderRadius: "8px",
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: { xs: "0.78rem", md: "0.82rem" },
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                   fontWeight: activeTab === i ? 600 : 400,
//                   color: activeTab === i ? "#FDE8E0" : "rgba(253,232,224,0.45)",
//                   background: activeTab === i ? "rgba(124,27,50,0.25)" : "transparent",
//                   border: activeTab === i
//                     ? "1px solid rgba(124,27,50,0.6)"
//                     : "1px solid rgba(255,255,255,0.07)",
//                   transition: "all 0.2s ease",
//                   "&:hover": {
//                     color: "rgba(253,232,224,0.85)",
//                     borderColor: "rgba(124,27,50,0.35)",
//                     background: "rgba(124,27,50,0.1)",
//                   },
//                 }}
//               >
//                 {tab.label}
//               </Box>
//             ))}
//           </Box>

//           {/* Grid */}
//           <Box
//             key={activeTab}
//             sx={{
//               display: "grid",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gridAutoRows: "30vh",
//               gap: { xs: 2, md: 2.5 },
//             }}
//           >
//             {currentImages.map((item, i) => (
//               <GalleryCard
//                 key={i}
//                 item={item}
//                 onClick={() => setLightbox(i)}
//               />
//             ))}
//           </Box>

//           {/* Footer rule */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: 1.5,
//               mt: { xs: 6, md: 8 },
//             }}
//           >
//             <Box sx={{ width: 50, height: "1px", background: "rgba(124,27,50,0.4)" }} />
//             <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: "#7C1B32" }} />
//             <Box sx={{ width: 50, height: "1px", background: "rgba(124,27,50,0.4)" }} />
//           </Box>

//         </Box>
//       </Box>
//     </>
//   );
// }
