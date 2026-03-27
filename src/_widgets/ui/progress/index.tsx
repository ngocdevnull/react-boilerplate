import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '../../common/cn';

import type { ProgressProps } from './types';
import {
  progressLabelVariants,
  progressTrackVariants,
  progressValueVariants,
  progressVariants,
} from './variant';

function toPercent(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (value / max) * 100));
}

export function Progress({ value, max = 100, showValue = false, className, ...props }: ProgressProps) {
  const percent = toPercent(value, max);

  return (
    <div className={cn(progressVariants({ className }))} {...props}>
      <ProgressPrimitive.Root
        className={cn(progressTrackVariants())}
        value={value}
        max={max}
      >
        <ProgressPrimitive.Indicator
          className={cn(progressValueVariants())}
          style={{ width: `${percent}%` }}
        />
      </ProgressPrimitive.Root>
      {showValue && <span className={cn(progressLabelVariants())}>{Math.round(percent)}%</span>}
    </div>
  );
}
