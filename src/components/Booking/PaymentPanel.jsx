/* eslint-disable react/prop-types */
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { whatsappLink } from './bookingRules';
import { formatCurrency } from '../../utils/formats';

const fallbackCopy = (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

const PaymentPanel = ({ pixKey, amount, message }) => {
  const [copied, setCopied] = useState(false);
  const hasAmount = Number(amount) > 0;

  const handleCopy = async () => {
    if (!pixKey) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(pixKey);
      } else {
        fallbackCopy(pixKey);
      }
      setCopied(true);
    } catch {
      fallbackCopy(pixKey);
      setCopied(true);
    }
  };

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, bgcolor: 'action.hover', minWidth: 0 }}>
      <Stack spacing={2}>
        <Typography variant="subtitle1" fontWeight={700}>
          Pagamento da reserva
        </Typography>

        <Typography variant="body2" color="text.secondary">
          1. Copie a chave Pix abaixo. 2. Envie o comprovante para o nosso WhatsApp.
        </Typography>

        <Stack spacing={1.5} sx={{ minWidth: 0 }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'monospace',
              wordBreak: 'break-all',
              bgcolor: 'background.paper',
              borderRadius: 2,
              px: 1.5,
              py: 1,
              minWidth: 0,
            }}
          >
            {pixKey || 'Chave Pix não configurada'}
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <Button
              variant="outlined"
              onClick={handleCopy}
              disabled={!pixKey}
              startIcon={<ContentCopyOutlinedIcon />}
              sx={{ minHeight: 44, width: { xs: '100%', sm: 'auto' } }}
            >
              {copied ? 'Copiado!' : 'Copiar chave'}
            </Button>

            <Button
              variant="contained"
              color="success"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              sx={{ minHeight: 44, width: { xs: '100%', sm: 'auto' } }}
            >
              Enviar comprovante
            </Button>
          </Stack>
        </Stack>

        {hasAmount && (
          <Alert severity="success" variant="outlined" sx={{ bgcolor: 'background.paper' }}>
            Valor da reserva: {formatCurrency(amount)}
            {message ? ` — ${message}` : ''}
          </Alert>
        )}
      </Stack>
    </Paper>
  );
};

export default PaymentPanel;
