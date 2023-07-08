import { h2_, h4, h6, h6_ } from '@/constants';
import {
    Backdrop,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useState } from 'react';

interface MemberCardProps {
    color: string;
    memberName: string;
    memberRole: string;
    memberThumbnail: string;
    memberDescription: string;
}

const MemberCard = ({
    color,
    memberName,
    memberRole,
    memberThumbnail,
    memberDescription,
}: MemberCardProps) => {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const theme = useTheme();
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <Box
                display="flex"
                width="auto"
                minHeight="91px"
                sx={{
                    borderStyle: 'solid',
                    borderColor: color,
                    borderWidth: '0.5px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
                alignItems="center"
                justifyContent="space-evenly"
                onClick={handleClick}
            >
                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backgroundColor: 'black',
                        display: 'flex',
                        fontSize: '30px',
                        padding: '20px',
                        flexDirection: breakPoint ? 'row' : 'column',
                        gap: '20px',
                    }}
                    className="closeIconCursor"
                    open={isClicked}
                >
                    <Box
                        height={breakPoint ? '100%' : '55%'}
                        width={breakPoint ? '55%' : '100%'}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box width="70%" height="auto">
                            <Typography
                                variant="h1"
                                fontSize={breakPoint ? h2_ : h4}
                                fontWeight="bolder"
                                color={theme.palette.secondary.main}
                                mb="25px"
                            >
                                {memberName}
                            </Typography>

                            <Typography
                                variant="h3"
                                fontSize={breakPoint ? h6 : h6_}
                                mb="25px"
                                fontStyle="italic"
                            >
                                {memberRole}
                            </Typography>

                            <Typography
                                variant="h3"
                                fontSize={breakPoint ? h6 : h6_}
                                lineHeight={1.5}
                                mb="25px"
                            >
                                {memberDescription}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        height={breakPoint ? '100%' : '45%'}
                        width={breakPoint ? '45%' : '100%'}
                    >
                        <img
                            src={memberThumbnail}
                            alt="drone image"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        />
                    </Box>
                </Backdrop>
                <Typography fontSize={breakPoint ? h6 : h6_}>
                    {memberName}
                </Typography>
                <Typography
                    variant="h4"
                    fontSize={breakPoint ? h6 : h6_}
                    fontStyle="italic"
                >
                    {memberRole}
                </Typography>
            </Box>
        </>
    );
};

export default MemberCard;
