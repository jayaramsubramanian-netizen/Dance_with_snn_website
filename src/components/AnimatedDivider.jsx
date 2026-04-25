import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const TildeWave = ({ color }) => (
    <Box
        component="svg"
        sx={{
            width: "100%",
            height: { xs: 16, md: 18 },
            overflow: "visible"
        }}
        viewBox="0 0 200 18"
        preserveAspectRatio="none"
    >
        <path
            d="M0,9 C100,0 100,18 200,9"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            style={{ strokeWidth: 3 }}
        />
    </Box>
);

export default function AnimatedDivider({ color = "#7C1B32" }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "55%", md: "80%" },
                mx: "auto",
                gap: { xs: "12px", md: "10px" },
                mb: 2.2,
            }}
        >
            {/* LEFT WAVE */}
            <MotionBox
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                    width: { xs: "28%", md: "5%" },
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <TildeWave color={color} />
            </MotionBox>

            {/* CENTER DOT */}
            <MotionBox
                animate={{ scale: [1, 1.7, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                    width: { xs: 4, md: 5 },        // bigger on phone
                    height: { xs: 4, md: 5 },
                    borderRadius: "50%",
                    background: color,
                    flexShrink: 0,
                    boxShadow: {
                        xs: `0 0 10px ${color}, 0 0 22px ${color}`,
                        md: `0 0 6px ${color}, 0 0 14px ${color}, 0 0 28px ${color}88`
                    },
                }}
            />

            {/* RIGHT WAVE */}
            <MotionBox
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                    width: { xs: "28%", md: "5%" },
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <TildeWave color={color} />
            </MotionBox>
        </Box>
    );
}