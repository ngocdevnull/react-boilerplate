import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Input } from '../input/input';
import { Button } from '../button/button';
import type { InputPasswordProps } from './types';

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, isError, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={className}
          isError={isError}
          ref={ref}
          {...props}
        />
        {!isError && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 p-0 flex items-center justify-center text-muted-foreground hover:text-foreground focus:outline-none hover:bg-transparent"
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        )}
      </div>
    );
  },
);
InputPassword.displayName = 'InputPassword';

export { InputPassword };
