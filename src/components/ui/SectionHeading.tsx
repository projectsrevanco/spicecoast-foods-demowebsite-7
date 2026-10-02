import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface SectionHeadingProps extends HTMLMotionProps<"div"> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ title, subtitle, align = 'center', className, ...props }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 flex flex-col gap-3', {
        'items-start text-left': align === 'left',
        'items-center text-center': align === 'center',
        'items-end text-right': align === 'right',
      }, className)}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-main">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-24 bg-primary mt-2 rounded-full", {
        'ml-auto mr-auto': align === 'center',
        'ml-auto': align === 'right',
      })} />
    </motion.div>
  );
}
