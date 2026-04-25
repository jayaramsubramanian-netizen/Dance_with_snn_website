// import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { Calendar, MapPin } from "lucide-react";

// const MotionBox = motion.create(Box);

// const events = [
//   {
//     title: "HTW Regional Cultural Program",
//     date: "April 5, 2026",
//     location: "Hindu Temple of Woodlands, Texas",
//     description: "A colorful celebration of India's diverse traditions, featuring dances from every state across the nation",
//   },
//   {
//     title: "Annual Bharathanatyam Recital",
//     date: "Sep 7,2026",
//     location: "TBD",
//     description: "A vibrant celebration of classical Indian dance with student performances and live demonstrations.",
//   },
// ];

// export default function UpcomingEventsSection() {
//   return (
//     <Box
//       component="section"
//       sx={{
//         position: "relative",
//         backgroundColor: "#06030A",
//         py: { xs: 12, md: 16 },
//         px: 2,
//         overflow: "hidden",
//       }}
//     >
//       {/* Gradient */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(160deg, rgba(124,27,50,0.18) 0%, rgba(6,3,10,0) 40%, rgba(124,27,50,0.12) 100%)",
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       />
//       {/* Glow top-right */}
//       <Box sx={{
//         position: "absolute", top: "8%", right: "5%",
//         width: 340, height: 340, borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(124,27,50,0.13) 0%, transparent 70%)",
//         filter: "blur(80px)", zIndex: 0, pointerEvents: "none",
//       }} />
//       {/* Glow bottom-left */}
//       <Box sx={{
//         position: "absolute", bottom: "8%", left: "5%",
//         width: 280, height: 280, borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(124,27,50,0.1) 0%, transparent 70%)",
//         filter: "blur(80px)", zIndex: 0, pointerEvents: "none",
//       }} />

//       {/* Content */}
//       <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1100px", mx: "auto", px: 3 }}>

//         {/* Header */}
//         <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
//           <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, mb: 2.5 }}>
//             <Box sx={{ width: 44, height: "1px", background: "rgba(124,27,50,0.45)" }} />
//             <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#7C1B32" }} />
//             <Box sx={{ width: 44, height: "1px", background: "rgba(124,27,50,0.45)" }} />
//           </Box>
//           <Typography
//             component="h2"
//             sx={{
//               fontFamily: "'Berkshire Swash', cursive",
//               fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
//               color: "#FDE8E0",
//               fontWeight: 400,
//               letterSpacing: "0.03em",
//               textShadow: "0 4px 24px rgba(124,27,50,0.45)",
//               mb: 1.5,
//               lineHeight: 1.1,
//             }}
//           >
//             Upcoming Events
//           </Typography>
//           <Typography
//             sx={{
//               fontFamily: "'Crimson Text', serif",
//               fontSize: { xs: "1.05rem", md: "1.15rem" },
//               color: "rgba(253,232,224,0.5)",
//               maxWidth: "520px",
//               mx: "auto",
//               lineHeight: 1.75,
//             }}
//           >
//             Join us for these upcoming celebrations of dance and culture
//           </Typography>
//         </Box>

//         {/* Event Cards */}
//         <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//           {events.map((event, index) => (
//             <MotionBox
//               key={event.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.55, delay: index * 0.12 }}
//               sx={{
//                 background: "rgba(15,8,20,0.75)",
//                 border: "1px solid rgba(124,27,50,0.2)",
//                 borderRadius: "14px",
//                 backdropFilter: "blur(12px)",
//                 px: { xs: 3.5, md: 5 },
//                 py: { xs: 3.5, md: 4 },
//                 transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
//                 "&:hover": {
//                   borderColor: "rgba(124,27,50,0.55)",
//                   boxShadow: "0 8px 40px rgba(124,27,50,0.2)",
//                   transform: "translateY(-3px)",
//                 },
//               }}
//             >
//               {/* Date */}
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
//                 <Calendar size={14} style={{ color: "#7C1B32" }} />
//                 <Typography
//                   sx={{
//                     fontFamily: "'Inter', sans-serif",
//                     fontSize: "0.8rem",
//                     color: "rgba(253,232,224,0.45)",
//                     letterSpacing: "0.08em",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {event.date}
//                 </Typography>
//               </Box>

//               {/* Event name */}
//               <Typography
//                 sx={{
//                   fontFamily: "'Berkshire Swash', cursive",
//                   fontSize: { xs: "1.7rem", md: "2.1rem" },
//                   color: "#FDE8E0",
//                   lineHeight: 1.2,
//                   mb: 1.5,
//                 }}
//               >
//                 {event.title}
//               </Typography>

//               {/* Location */}
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
//                 <MapPin size={14} style={{ color: "#7C1B32" }} />
//                 <Typography
//                   sx={{
//                     fontFamily: "'Inter', sans-serif",
//                     fontSize: "0.85rem",
//                     color: "rgba(253,232,224,0.4)",
//                     letterSpacing: "0.03em",
//                   }}
//                 >
//                   {event.location}
//                 </Typography>
//               </Box>

//               {/* Divider */}
//               <Box sx={{ width: "100%", height: "1px", background: "rgba(124,27,50,0.15)", mb: 2 }} />

//               {/* One-liner */}
//               <Typography
//                 sx={{
//                   fontFamily: "'Crimson Text', serif",
//                   fontSize: { xs: "1rem", md: "1.1rem" },
//                   color: "rgba(253,232,224,0.55)",
//                   lineHeight: 1.65,
//                   fontStyle: "italic",
//                 }}
//               >
//                 {event.description}
//               </Typography>
//             </MotionBox>
//           ))}
//         </Box>

//         {/* Footer rule */}
//         <Box
//           sx={{
//             display: "flex", alignItems: "center", justifyContent: "center",
//             gap: 1.5, mt: { xs: 8, md: 10 },
//           }}
//         >
//           <Box sx={{ width: 50, height: "1px", background: "rgba(124,27,50,0.4)" }} />
//           <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: "#7C1B32" }} />
//           <Box sx={{ width: 50, height: "1px", background: "rgba(124,27,50,0.4)" }} />
//         </Box>

//       </Box>
//     </Box>
//   );
// }