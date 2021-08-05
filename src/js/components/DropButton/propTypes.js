import PropTypes from 'prop-types';
import { genericProps } from '../../utils/general-prop-types';

export const DropButtonPropType = {
  ...genericProps,
  disabled: PropTypes.bool,
  dropAlign: PropTypes.shape({
    top: PropTypes.oneOf(['top', 'bottom']),
    bottom: PropTypes.oneOf(['top', 'bottom']),
    right: PropTypes.oneOf(['left', 'right']),
    left: PropTypes.oneOf(['left', 'right']),
  }),
  dropContent: PropTypes.element.isRequired,
  dropTarget: PropTypes.object,
  dropProps: PropTypes.object,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
