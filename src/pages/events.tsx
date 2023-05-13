import EventCard from '@/components/EventCard';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const array = [1, 2, 3, 4, 5, 6];

export default function Events() {
    const theme = useTheme();
    return (
        <>
            <Box
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'maxContent',
                }}
            >
                <Box
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h1">
                        <span
                            style={{
                                color: `${theme.palette.secondary.main}`,
                            }}
                        >
                            E
                        </span>
                        vents
                    </Typography>
                    <Typography variant="h3">Our latest events</Typography>
                </Box>

                <Box
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto ',
                        padding: '0 100px',
                        gridGap: '30px',
                    }}
                >
                    {array.map((item, index) => (
                        <EventCard key={index + 1}></EventCard>
                    ))}
                </Box>
            </Box>
        </>
    );
}
