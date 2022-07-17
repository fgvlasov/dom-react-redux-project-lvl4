import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useIntl } from 'react-intl';
import * as _ from 'lodash';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { makeStyles, useTheme } from '@mui/styles';

import { BorderedFormBox } from 'components/Form';

const useStyles = makeStyles(theme => ({
    select: {
        backgroundColor: theme.palette.primary.white,
    },
    menuItem: {
        color: theme.palette.primary.main,
    },
    menuItemSelected: {
        color: theme.palette.primary.main,
    },
    text: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
}));

const SelectItem = ({ type, values, scenarios, zeroValues, control, isCreatedByBot, profile = false }) => {
    const classes = useStyles();
    const theme = useTheme();
    const intl = useIntl();

    const [open, setOpen] = useState(false);

    return (
        <BorderedFormBox
            name={type}
            label={intl.formatMessage({ id: instrument.radar.choice.${type} })}
            error={zeroValues}
            popoverContent={intl.formatMessage({ id: profile.info.popover.${type} })}
            isCreatedByBot={isCreatedByBot}
            openSelect={open}
            setOpenSelect={setOpen}
        >
            <Controller
                name={type}
                control={control}
                defaultValue={scenarios[type] || 0}
                render={({ value, onChange }) => {
                    return (
                        <Select
                            variant='outlined'
                            value={value || 0}
                            open={open}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            onChange={event => onChange(event.target.value)}
                            disabled={profile}
                            classes={{
                                select: classes.select,
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        bgcolor: theme.palette.primary.white,
                                        '& .MuiMenuItem-root': {
                                            // padding: 1,
                                        },
                                    },
                                },
                            }}
                        >
                            {_.map(values, ({ value, label }, index) => {
                                return (
                                    <MenuItem
                                        key={type + value + index}
                                        value={value}
                                        disabled={value === 0}
                                        classes={{
                                            root: classes.menuItem,
                                            selected: classes.menuItemSelected,
                                        }}
                                    >
                                        <Typography className={classes.text}>
                                            {label ? label : intl.formatMessage({ id: instrument.radar.choice.${type}.${index} })}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    );
                }}
            />
        </BorderedFormBox>
    );
};

export default SelectItem;