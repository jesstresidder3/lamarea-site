/* Small HTML builders for accordion bodies (page builder C). Everything passed in is escaped. */
import { escapeHtml } from '../../../base/text';

export const listHtml = (items: string[], cls = 'c-acc-list') =>
  '<ul class="' + cls + '">' + items.map((t) => '<li>' + escapeHtml(t) + '</li>').join('') + '</ul>';
