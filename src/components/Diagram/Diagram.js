import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import cn from 'classnames';

import styles from './Diagram.module.scss';
import { useEffect, useMemo } from 'react';

const frets = Array.from(Array(7));

const STRINGS = {
    GUITAR: ['E', 'A', 'D', 'G', 'B', 'E'],
    CAVACO: ['D', 'G', 'B', 'D'],
}

const FretStrings = ({ stringType, fretId, chord, prefix }) => {
    const strings = STRINGS[stringType];

    return strings.map((s, stringId) => {
        const stringClassName = cn(styles.string, {
            [styles.fretLast]: fretId === frets.length - 1,
        });

        const lastString = strings.length - 1;
        const fretPos = fretId + 1;
        const stringPos = lastString - stringId + 1;
        const position = parseInt(`${stringPos}${fretPos}`);

        const note = chord.find((note) => note.pos === position);

        return (
            <div key={`string-${prefix}-${position}`} data-key={`string-${prefix}-${position}`} className={stringClassName}>
                {note ? <div className={styles.note}>{note.finger}</div> : null}
            </div>
        );
    })
}

const Frets = ({ stringType, chord, prefix }) => {
    return frets.map((f, fidx) => {
        const fretClassName = cn(styles.fret, {
            [styles.fretLast]: fidx === frets.length - 1,
        });

        return (
            <div key={`fret-${prefix}-${fidx + 1}`} data-key={`fret-${prefix}-${fidx + 1}`} className={fretClassName}>
                <div className={styles.fretNumber}>{ fidx + 1 }</div>

                <FretStrings stringType={stringType} fretId={fidx} chord={chord} prefix={prefix} />
            </div>
        );
    });
}

const StringNames = ({ stringType, prefix }) => {
    const strings = STRINGS[stringType];

    return strings.map((stringName, idx) => (
        <div key={`string-name-${prefix}-${stringName}${idx}`} data-key={`string-name-${prefix}-${stringName}${idx}`} className={styles.stringName}>
            <span className={styles.stringNameText}>{stringName}</span>
        </div>
    ))
}

const Diagram = ({ stringType, chord }) => {
    const strings = STRINGS[stringType];
    const prefix = useMemo(() => nanoid(), []);

    if (!strings) return null;

    const className = cn(styles.container, {
        [styles.containerLg]: stringType === 'GUITAR',
    });

    return (
        <div className={className}>
            <Frets stringType={stringType} chord={chord} prefix={prefix} />

            <div className={styles.stringNames}>
                <StringNames stringType={stringType} prefix={prefix} />
            </div>
        </div>
    )
}

Diagram.propTypes = {
    stringType: PropTypes.oneOf(['GUITAR', 'CAVACO']).isRequired,
    chord: PropTypes.arrayOf(PropTypes.shape({
        finger: PropTypes.number,
        pos: PropTypes.number,
    })),
}

Diagram.defaultProps = {
    chord: [],
}

export default Diagram;
