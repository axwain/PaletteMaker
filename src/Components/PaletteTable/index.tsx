import { useState } from 'react';
import {
  columnBaseHeaders,
  columnDerivedHeaders,
  initialColors,
  rowHeaders,
} from '../../utils/constants';
import { GridHeader } from '../GridHeader';
import { PaletteControls } from '../PaletteControls';
import { PaletteGrid } from '../PaletteGrid';
import './styles.css';

type Props = {
  baseColors: readonly string[];
  lighterShades: readonly string[];
  darkerShades: readonly string[];
  derivedColors: readonly string[];
  derivedLighterShades: readonly string[];
  derivedDarkerShades: readonly string[];
  onComputePalette: () => void;
  onResetPalette: () => void;
};

export function PaletteTable({
  baseColors,
  lighterShades,
  darkerShades,
  derivedColors,
  derivedLighterShades,
  derivedDarkerShades,
  onComputePalette,
  onResetPalette,
}: Props) {
  const [clickedColor, setClickedColor] = useState(initialColors[0]);
  return (
    <div>
      <div className="palette-grids">
        <div className="palette-grid-column">
          <GridHeader
            alignItems="center"
            columnCount={1}
            headers={rowHeaders}
            justifyContent="end"
          />
          <div>
            <GridHeader
              alignItems="end"
              columnCount={initialColors.length}
              headers={columnBaseHeaders}
              justifyContent="center"
            />
            <div className="palette">
              <PaletteGrid
                colors={lighterShades}
                columnCount={initialColors.length}
                onClick={setClickedColor}
              />
              <PaletteGrid
                colors={baseColors}
                columnCount={baseColors.length}
                onClick={setClickedColor}
              />
              <PaletteGrid
                colors={darkerShades}
                columnCount={initialColors.length}
                onClick={setClickedColor}
              />
            </div>
          </div>
        </div>
        <div className="palette-grid-column">
          <GridHeader
            className="derived-column-header"
            alignItems="center"
            columnCount={1}
            headers={rowHeaders}
            justifyContent="end"
          />
          <div>
            <GridHeader
              alignItems="end"
              columnCount={derivedColors.length}
              headers={columnDerivedHeaders}
              justifyContent="center"
            />
            <div className="palette">
              <PaletteGrid
                colors={derivedLighterShades}
                columnCount={derivedColors.length}
                onClick={setClickedColor}
              />
              <PaletteGrid
                colors={derivedColors}
                columnCount={derivedColors.length}
                onClick={setClickedColor}
              />
              <PaletteGrid
                colors={derivedDarkerShades}
                columnCount={derivedColors.length}
                onClick={setClickedColor}
              />
            </div>
          </div>
        </div>
      </div>
      <PaletteControls
        clickedColor={clickedColor}
        onComputePalette={onComputePalette}
        onResetPalette={onResetPalette}
      />
    </div>
  );
}
